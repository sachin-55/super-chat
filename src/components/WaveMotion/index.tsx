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

    let amplitude = 50 + Math.random() * 60;
    let tamp = amplitude;
    for (let i = 0; i < 7; i++) {
      waves.push({
        angle: Math.PI * 2,
        frequency: 0.004 + Math.random() * 0.006,
        amplitude,
        speed: 0.02 + Math.random() * 0.005,
        // yPosition: canvasHeight * 0.2 + Math.random() * (canvasHeight * 0.8),
        yPosition: -(tamp + amplitude * 3 + i * 100),
        direction: Math.random() > 0.5 ? 1 : -1,
      });
      amplitude = 50 + Math.random() * 60;
      tamp += amplitude * 2;
    }

    wavesRef.current = waves;
  };

  const updateWave = (
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
  ) => {
    const waves = wavesRef.current;
    // Overlay the canvas with a semi-transparent layer for a trailing effect
    ctx.fillStyle = "rgba(20,50,200, 0.01)"; // Semi-transparent overlay
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Loop through each wave and render it
    waves.forEach((wave, index) => {
      const fadeStart = canvasHeight * 0.5; // Start fading at 70% of canvas height
      const fadeEnd = canvasHeight + wave.amplitude; // Fully faded at the bottom of the canvas

      // Calculate alpha value based on yPosition
      const alpha =
        wave.yPosition > fadeStart
          ? Math.max(
              0,
              1 - (wave.yPosition - fadeStart) / (fadeEnd - fadeStart)
            )
          : 1;

      ctx.globalAlpha = alpha; // Apply transparency based on wave's yPosition
      ctx.beginPath();
      // Gradient color for the tail effect
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvasWidth,
        canvasHeight
      );
      gradient.addColorStop(
        0,
        `#00fa` // Start with high opacity
      );

      gradient.addColorStop(
        0.4,
        `#77fa` // End with zero opacity
      );
      gradient.addColorStop(
        1,
        `#aafa` // End with zero opacity
      );

      ctx.strokeStyle = gradient;
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
      wave.yPosition += 0.5;
      if (wave.yPosition - wave.amplitude > canvasHeight) {
        const prevIndex = index === 0 ? waves.length - 1 : index - 1;
        const prevPos =
          waves[prevIndex].yPosition < -(wave.amplitude * 2)
            ? Math.abs(waves[prevIndex].yPosition)
            : wave.amplitude * 2;
        wave.yPosition = -(prevPos + wave.amplitude * 3 + index * 100);
      }
      // Update the wave's angle for the next frame
      wave.angle += 0.005;
    });
    ctx.globalAlpha = 1;
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
      // ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before every frame
      // ctx.globalAlpha = 0.01; // Set transparency for all waves
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
