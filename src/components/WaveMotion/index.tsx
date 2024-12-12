import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type WaveType = {
  angle: number;
  amplitude: number;
  frequency: number;
  speed: number;
  yPosition: number;
  direction: number;
};

const WaveMotion = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Reference to the container
  const [containerDimensions, setContainerDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  const wavesRef = useRef<WaveType[]>([]); // Reference to the

  useEffect(() => {
    const updateCanvasSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width, height });
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  const generateWave = ({
    canvasHeight,
    canvasWidth,
  }: {
    canvasHeight: number;
    canvasWidth: number;
  }) => {
    const waves = [];

    for (let i = 0; i < 10; i++) {
      waves.push({
        angle: Math.random() * Math.PI * 2,
        frequency: 0.01 + Math.random() * 0.015,
        amplitude: canvasHeight * 0.05 + Math.random() * (canvasHeight * 0.15),
        speed: 0.02 + Math.random() * 0.1,
        yPosition: canvasHeight * 0.2 + Math.random() * (canvasHeight * 0.8),
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    wavesRef.current = waves;
  };

  const updateWave = (
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
  ) => {
    const waves = wavesRef.current;

    // Loop through each wave and render it
    waves.forEach((wave, index) => {
      ctx.beginPath();
      ctx.strokeStyle = `hsl(${(index * 36) % 360}, 70%, 50%)`; // Vary the color of each wave

      ctx.lineWidth = 2;

      for (let x = 0; x < canvasWidth; x++) {
        if (x % 2 === 0 || x % 3 === 0) {
          continue;
        }

        const y =
          Math.sin(x * wave.frequency + wave.angle) * wave.amplitude +
          wave.yPosition;

        if (x === 0) {
          ctx.moveTo(x, y); // Start at the initial position
        } else {
          ctx.lineTo(x, y); // Draw the wave
        }
      }
      ctx.stroke();
      wave.yPosition += 1;
      if (wave.yPosition > canvasHeight) {
        wave.yPosition = -wave.amplitude;
      }
      // Update the wave's angle for the next frame
      wave.angle += wave.speed;
    });
  };

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
    generateWave({ canvasHeight: canvas.height, canvasWidth: canvas.width });
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before every frame
      // ctx.globalAlpha = 0.1; // Set transparency for all waves
      updateWave(ctx, canvas.width, canvas.height);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [containerDimensions]);

  return (
    <WaveMotionStyled ref={containerRef}>
      <canvas ref={canvasRef} />
    </WaveMotionStyled>
  );
};

export default WaveMotion;

const WaveMotionStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(23, 28, 56, 0.9);
  z-index: -1;
`;
