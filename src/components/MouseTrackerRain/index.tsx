import { useEffect, useRef, useState } from "react";
import { MouseTrackerRainContainerStyled } from "./style";

interface RainDrop {
  x: number;
  y: number;
  height: number;
  width: number;
  speed: number;
}

const MouseTrackerRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Reference to the container
  const [containerDimensions, setContainerDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: containerDimensions.width / 2,
    y: containerDimensions.height / 2,
  }); // Store mouse position

  const rainDropsRef = useRef<RainDrop[]>([]); // useRef to hold the rain drops without triggering re-renders
  const mouseMoveTimerRef = useRef<NodeJS.Timeout | null>(null); // to store the timeout ID

  const generateRainDrops = (canvasWidth: number, canvasHeight: number) => {
    const drops: RainDrop[] = [];
    for (let i = 0; i < 1000; i++) {
      const width = parseFloat((Math.random() * 3 + 0.5).toFixed(2));
      drops.push({
        x: Math.floor(Math.random() * canvasWidth),
        y: Math.floor(Math.random() * canvasHeight),
        height: Math.floor(Math.random() * 18 + 6),
        width,
        speed: parseFloat((width * 1.1).toFixed(2)),
      });
    }

    rainDropsRef.current = drops;
  };

  const drawCircle = (
    ctx: CanvasRenderingContext2D,
    mousePosition: { x: number; y: number }
  ) => {
    ctx.beginPath();
    ctx.arc(mousePosition.x, mousePosition.y, 100, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.171)"; // White circle with some transparency
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
  };

  const updateRain = (
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
  ) => {
    ctx.fillStyle = "rgba(200, 200, 255, 0.5)";

    rainDropsRef?.current.forEach((drop) => {
      drop.y += isMouseMoving ? 0 : drop.speed;

      if (drop.y > canvasHeight) {
        drop.y = -drop.height;
      }

      // Check if the raindrop is inside the circle
      const dx = drop.x - mousePosition.x;
      const dy = drop.y - mousePosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy); // Calculate the distance from the mouse position

      if (distance <= 100) {
        ctx.fillStyle = "rgba(61, 232, 244, 0.7)"; // Change color to yellow for raindrops inside the circle
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.width + 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(2, 19, 255, 0.5)"; // White circle with some transparency
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
      } else {
        ctx.fillStyle = "rgba(200, 200, 255, 0.5)"; // Default blue color
        ctx.fillRect(drop.x, drop.y, drop.width, drop.height);
      }

      // Draw the rain drop
    });
  };

  // Update canvas size when container size changes
  useEffect(() => {
    const updateCanvasSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        generateRainDrops(width, height);
        setContainerDimensions({ width, height });
        setMousePosition({ x: width / 2, y: height / 2 });
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

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before every frame
      updateRain(ctx, canvas.width, canvas.height);
      drawCircle(ctx, mousePosition);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [containerDimensions, isMouseMoving, mousePosition]);

  useEffect(() => {
    const handleMouseOver = (event: MouseEvent) => {
      const canvasRect = canvasRef.current?.getBoundingClientRect();

      const x = event.clientX - (canvasRect?.left ?? 0);
      const y = event.clientY - (canvasRect?.top ?? 0);

      setMousePosition({ x, y }); // Update the mouse position relative to the canvas

      setIsMouseMoving(true);

      if (mouseMoveTimerRef.current) {
        clearTimeout(mouseMoveTimerRef.current);
      }

      mouseMoveTimerRef.current = setTimeout(() => {
        setIsMouseMoving(false);
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseOver);
    };
  }, []);

  return (
    <MouseTrackerRainContainerStyled ref={containerRef}>
      <canvas ref={canvasRef} />
    </MouseTrackerRainContainerStyled>
  );
};

export default MouseTrackerRain;
