const canvas = document.querySelector("#hero-canvas");
const ctx = canvas.getContext("2d");
let width = 0;
let height = 0;
let particles = [];

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  width = canvas.clientWidth;
  height = canvas.clientHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  particles = Array.from({ length: Math.max(42, Math.floor(width / 24)) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.36,
    vy: (Math.random() - 0.5) * 0.24,
    size: Math.random() * 1.8 + 0.6,
    hue: Math.random() > 0.72 ? "229, 68, 47" : "86, 174, 177",
  }));
}

function draw(time) {
  ctx.clearRect(0, 0, width, height);
  ctx.globalCompositeOperation = "lighter";

  const pulse = Math.sin(time * 0.0012) * 0.5 + 0.5;
  const centerX = width * (0.45 + Math.sin(time * 0.00026) * 0.08);
  const centerY = height * (0.45 + Math.cos(time * 0.00022) * 0.1);

  const gradient = ctx.createRadialGradient(centerX, centerY, 40, centerX, centerY, Math.max(width, height) * 0.64);
  gradient.addColorStop(0, `rgba(227, 183, 96, ${0.17 + pulse * 0.08})`);
  gradient.addColorStop(0.34, "rgba(86, 174, 177, 0.1)");
  gradient.addColorStop(1, "rgba(12, 13, 12, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  particles.forEach((point, index) => {
    point.x += point.vx;
    point.y += point.vy;

    if (point.x < -20) point.x = width + 20;
    if (point.x > width + 20) point.x = -20;
    if (point.y < -20) point.y = height + 20;
    if (point.y > height + 20) point.y = -20;

    ctx.beginPath();
    ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${point.hue}, 0.8)`;
    ctx.fill();

    for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
      const next = particles[nextIndex];
      const dx = point.x - next.x;
      const dy = point.y - next.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 128) {
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(next.x, next.y);
        ctx.strokeStyle = `rgba(245, 241, 232, ${0.08 * (1 - distance / 128)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  });

  ctx.globalCompositeOperation = "source-over";
  requestAnimationFrame(draw);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
requestAnimationFrame(draw);
