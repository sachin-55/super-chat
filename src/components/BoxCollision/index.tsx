import { useEffect, useRef, useState } from "react";
import { BoxCollisionContainerStyled } from "./style";

interface Particle {
  x: number;
  y: number;
  size: number;
  velocityX: number; // Horizontal speed (velocity)
  velocityY: number; // Vertical speed (velocity)}
  isSolid: boolean;
  gravity: number;
}

const BoxCollision = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const particlesRef = useRef<Particle[]>([]);

  const generateParticles = (canvasWidth: number, canvasHeight: number) => {
    const drops: Particle[] = [];
    for (let i = 0; i < 110; i++) {
      const size = parseFloat((Math.random() * 12 + 3).toFixed(2));
      const isSolid = Math.random() > 0.5;
      const velocity = isSolid
        ? (size <= 6 ? 10 - size : size) * 0.67
        : (size >= 6 ? 10 - size : size) * 0.67;
      drops.push({
        x: Math.floor(Math.random() * canvasWidth),
        y: Math.floor(Math.random() * canvasHeight),
        size,
        velocityX: velocity,
        velocityY: velocity,
        isSolid,
        gravity: 0.01,
      });
    }

    particlesRef.current = drops;
  };

  const drawCircle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number = 55,
    isSolid: boolean = false,
    fillColor: string = "rgba(200, 200, 255, 0.5)",
    strokeColor: string = "rgba(200, 200, 255, 0.5)"
  ) => {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    if (isSolid) {
      ctx.fillStyle = fillColor; // White circle with some transparency
      ctx.fill();
    } else {
      ctx.strokeStyle = strokeColor; // White circle with some transparency
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.closePath();
  };

  const updateCollision = (
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
  ) => {
    ctx.fillStyle = "rgba(200, 200, 255, 0.5)";

    particlesRef?.current.forEach((particle, index) => {
      particle.velocityY += particle.gravity; // Increase vertical velocity due to gravity

      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      // Bounce off the edges (canvas boundaries)
      if (
        particle.x - particle.size <= 0 ||
        particle.x + particle.size >= canvasWidth
      ) {
        particle.velocityX = -particle.velocityX; // Reverse horizontal direction
      }

      // Bounce off the edges (canvas boundaries)
      if (particle.x - particle.size < 0) {
        particle.x = particle.size;
      }
      if (particle.x + particle.size > canvasWidth) {
        particle.x = canvasWidth - particle.size;
      }

      if (particle.y <= 0 || particle.y + particle.size >= canvasHeight) {
        particle.velocityY = -particle.velocityY; // Reverse vertical direction
      }
      if (particle.y + particle.size > canvasHeight) {
        particle.y = canvasHeight - particle.size; // Prevent particle from going out of bounds
      }
      particlesRef.current.forEach((otherParticle, otherIndex) => {
        if (index !== otherIndex) {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance <= particle.size + otherParticle.size) {
            // Normalize the direction vector
            const normalX = dx / distance;
            const normalY = dy / distance;

            // Calculate relative velocity along the normal
            const relativeVelocityX =
              otherParticle.velocityX - particle.velocityX;
            const relativeVelocityY =
              otherParticle.velocityY - particle.velocityY;
            const dotProduct =
              relativeVelocityX * normalX + relativeVelocityY * normalY;

            // If particles are moving towards each other (dot product > 0), reflect the velocities
            if (dotProduct > 0) {
              const restitution = 0.99; // 1 is perfect elastic collision (no energy loss)
              const impulse =
                (2 * dotProduct * restitution) /
                (particle.size + otherParticle.size);

              // Update velocities with restitution factor
              particle.velocityX +=
                impulse *
                normalX *
                (otherParticle?.isSolid
                  ? otherParticle.size
                  : otherParticle.size * 0.6);
              particle.velocityY +=
                impulse *
                normalY *
                (otherParticle?.isSolid
                  ? otherParticle.size
                  : otherParticle.size * 0.6);
              otherParticle.velocityX -=
                impulse *
                normalX *
                (particle?.isSolid ? particle.size : particle.size * 0.6);
              otherParticle.velocityY -=
                impulse *
                normalY *
                (particle?.isSolid ? particle.size : particle.size * 0.6);

              // Prevent overlapping by adjusting position
              const overlap = particle.size + otherParticle.size - distance;
              particle.x += normalX * overlap * 0.5;
              particle.y += normalY * overlap * 0.5;
              otherParticle.x -= normalX * overlap * 0.5;
              otherParticle.y -= normalY * overlap * 0.5;
            }
          }
        }
      });

      drawCircle(ctx, particle.x, particle.y, particle.size, particle?.isSolid);
    });
  };

  // Update canvas size when container size changes
  useEffect(() => {
    const updateCanvasSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width, height });
      }
    };

    // Initial setup
    updateCanvasSize();

    // Resize event listener
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const { width, height } = containerDimensions;
    canvas.width = width;
    canvas.height = height;
    generateParticles(width, height);

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before every frame
      updateCollision(ctx, canvas.width, canvas.height);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [containerDimensions]);

  useEffect(() => {
    const handleMouseClick = (event: MouseEvent) => {
      const canvasRect = canvasRef.current?.getBoundingClientRect();
      if (!canvasRect) return;

      // const mouseX = event.clientX - canvasRect.left;
      const mouseY = event.clientY - canvasRect.top;

      particlesRef.current.forEach((particle) => {
        if (Math.abs(parseFloat(particle.velocityY.toFixed(2))) <= 0.01) {
          const velocity = particle.isSolid
            ? (particle.size <= 6 ? 10 - particle.size : particle.size) * 0.67
            : (particle.size >= 6 ? 10 - particle.size : particle.size) * 0.67;
          particle.y = mouseY;
          particle.x = Math.floor(Math.random() * canvasRect?.width);
          particle.velocityY = velocity;
          particle.gravity = 0.01;
        }
      });
    };

    window.addEventListener("dblclick", handleMouseClick);
    return () => {
      window.removeEventListener("dblclick", handleMouseClick);
    };
  }, []);

  return (
    <BoxCollisionContainerStyled ref={containerRef}>
      <canvas ref={canvasRef} />
    </BoxCollisionContainerStyled>
  );
};

export default BoxCollision;
