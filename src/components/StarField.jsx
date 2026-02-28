import { useEffect, useRef } from 'react';

export default function StarField() {
  const canvasRef = useRef(null);
  const smallRef = useRef(null);
  const mediumRef = useRef(null);
  const largeRef = useRef(null);

  // Scroll-based parallax for star layers
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (smallRef.current)
            smallRef.current.style.transform = `translateY(${y * 0.05}px)`;
          if (mediumRef.current)
            mediumRef.current.style.transform = `translateY(${y * 0.15}px)`;
          if (largeRef.current)
            largeRef.current.style.transform = `translateY(${y * 0.3}px)`;
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    let shootingStars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate shooting stars periodically
    const spawnShootingStar = () => {
      if (shootingStars.length < 2 && Math.random() < 0.01) {
        shootingStars.push({
          x: Math.random() * canvas.width * 0.7 + canvas.width * 0.3,
          y: Math.random() * canvas.height * 0.4,
          len: 80 + Math.random() * 60,
          speed: 4 + Math.random() * 4,
          opacity: 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Shooting stars
      spawnShootingStar();
      shootingStars = shootingStars.filter((s) => s.opacity > 0);
      shootingStars.forEach((s) => {
        const gradient = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x + s.len * 0.7,
          s.y - s.len * 0.7
        );
        gradient.addColorStop(0, `rgba(56, 189, 248, ${s.opacity})`);
        gradient.addColorStop(0.4, `rgba(168, 85, 247, ${s.opacity * 0.6})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.len * 0.7, s.y - s.len * 0.7);
        ctx.stroke();

        // Glow dot at head
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        s.x -= s.speed;
        s.y += s.speed;
        s.opacity -= 0.008;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* CSS star layers */}
      <div className="starfield">
        <div ref={smallRef} className="stars-layer stars-small" />
        <div ref={mediumRef} className="stars-layer stars-medium" />
        <div ref={largeRef} className="stars-layer stars-large" />
      </div>
      {/* Canvas for shooting stars */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{ mixBlendMode: 'screen' }}
      />
    </>
  );
}
