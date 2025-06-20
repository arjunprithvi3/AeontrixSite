import React, { useEffect } from 'react';

const MatrixBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('Matrix');
    if (!canvas) return;

    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#0F0';
      context.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }

        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 30);

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* Matrix Canvas */}
      <canvas id="Matrix" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />

      {/* White Box with Pentagon Cutout */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '400px',
          height: '300px',
          backgroundColor: 'white',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.6)',
          overflow: 'hidden',
        }}
      >
        {/* Pentagon Mask + Spline inside */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Pentagon Cutout Using SVG as a mask */}
          <svg
            viewBox="0 0 100 60"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120px',
              height: '80px',
              zIndex: 3,
              backgroundColor: 'white',
            }}
          >
            <polygon
              points="0,60 50,0 100,60"
              fill="white"
              stroke="black"
              strokeWidth="1"
            />
          </svg>

          {/* Spline Robot Embed in exact place */}
          <iframe
            src="https://prod.spline.design/YOUR-SPLINE-LINK/scene.splinecode"
            title="Spline Robot"
            frameBorder="0"
            width="120"
            height="80"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 4,
              border: 'none',
              pointerEvents: 'none', // robot is part of visual only
            }}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default MatrixBackground;
