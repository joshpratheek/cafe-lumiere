import { useEffect, useRef } from 'react';

export default function Steam() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }

      reset() {
        // spawn from bottom-center area — like rising from a cup
        this.x     = window.innerWidth * 0.5 + (Math.random() - 0.5) * 120;
        this.y     = window.innerHeight * 0.78;
        this.size  = Math.random() * 18 + 6;
        this.speedY = Math.random() * 0.6 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.life   = 0;
        this.maxLife = Math.random() * 180 + 120;
        this.wobble  = Math.random() * Math.PI * 2;
        this.wobbleSpeed = (Math.random() - 0.5) * 0.03;
      }

      update() {
        this.life++;
        this.wobble += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.5;
        this.y -= this.speedY;
        this.size += 0.06;
        if (this.life >= this.maxLife) this.reset();
      }

      draw() {
        const progress = this.life / this.maxLife;
        // fade in then fade out
        const alpha = progress < 0.2
          ? (progress / 0.2) * 0.12
          : progress > 0.7
          ? ((1 - progress) / 0.3) * 0.12
          : 0.12;

        const grad = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        grad.addColorStop(0, `rgba(232, 184, 154, ${alpha})`);
        grad.addColorStop(1, `rgba(232, 184, 154, 0)`);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }
    }

    // create particles
    for (let i = 0; i < 28; i++) {
      const p = new Particle();
      // spread initial life so they don't all start together
      p.life = Math.floor(Math.random() * p.maxLife);
      particles.push(p);
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 3,
        pointerEvents: 'none',
        opacity: 0.85,
      }}
    />
  );
}