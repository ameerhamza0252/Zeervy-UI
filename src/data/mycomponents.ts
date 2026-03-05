import { ZeervyComponent, ComponentCategoryMeta } from '@/types'
import { defaultConfig } from 'next/dist/server/config-shared'

export const CATEGORY_META: ComponentCategoryMeta[] = [
  {
    id: 'hero',
    label: 'Hero Sections',
    description: 'Stunning Hero sections with animations',
    icon: '★',
    count: 8,
    color: '#C8FF00',
  },
  {
    id: 'cards',
    label: 'Cards',
    description: 'Product, profile, pricing, and feature cards',
    icon: '▦',
    count: 12,
    color: '#ff914d',
  },
  {
    id: 'typography',
    label: 'Typography',
    description: 'Headings, text reveals, and type effects',
    icon: 'Aa',
    count: 9,
    color: '#7C3AED',
  },
  {
    id: 'buttons',
    label: 'Buttons',
    description: 'Interactive buttons with micro-animations',
    icon: '◉',
    count: 11,
    color: '#F59E0B',
  },
  {
    id: 'forms',
    label: 'Forms',
    description: 'Input fields, search bars, and form layouts',
    icon: '◻',
    count: 8,
    color: '#EC4899',
  },
  {
    id: 'other',
    label: 'Other',
    description: 'Loaders, badges, tags, and more',
    icon: '✦',
    count: 10,
    color: '#8B5CF6',
  },
]

 const MYCOMPONENTS: ZeervyComponent[] = [
  {
    slug: 'hero-1',
    name: 'Animated Orbital Particles',
    description: 'Orbital partical animations, revoles around cursor movement, creating an interactive and dynamic background effect.',
    category: 'hero',
    tags: ['Cursor Motion', 'Orbital Particles'],
    code:`<head>
    <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #030712;
    font-family: system-ui, -apple-system, sans-serif;
    overflow-x: hidden;
  }

  section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 1rem;
    overflow: hidden;
  }

  canvas {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 10;
    text-align: center;
    max-width: 1000px;
    padding: 3rem;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border-radius: 3rem;
  }

  .badge {
    display: inline-block;
    padding: 6px 18px;
    margin-bottom: 1.5rem;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.05);
    color: #22d3ee;
    font-family: monospace;
    font-size: 0.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: bold;
  }

  h1 {
    font-size: clamp(3rem, 8vw, 8rem);
    font-weight: 900;
    color: white;
    margin-bottom: 2rem;
    line-height: 1;
  }

  .gradient-text {
    background: linear-gradient(to right, #22d3ee, #a855f7, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: clamp(1rem, 2vw, 1.5rem);
    color: #9ca3af;
    margin-bottom: 3rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-primary {
    padding: 14px 32px;
    background: white;
    color: #111827;
    font-weight: bold;
    border-radius: 999px;
    text-decoration: none;
    transition: 0.3s ease;
  }

  .btn-primary:hover {
    background: #22d3ee;
    color: white;
    transform: scale(1.05);
  }

  .btn-outline {
    padding: 14px 32px;
    border: 1px solid rgba(255,255,255,0.3);
    color: white;
    font-weight: bold;
    border-radius: 999px;
    text-decoration: none;
    transition: 0.3s ease;
  }

  .btn-outline:hover {
    background: rgba(255,255,255,0.1);
  }

  .scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    opacity: 0.3;
    font-family: monospace;
    color: white;
    font-size: 10px;
    letter-spacing: 2px;
  }

  .scroll-line {
    width: 1px;
    height: 50px;
    background: linear-gradient(to bottom, white, transparent);
    margin: 10px auto 0;
  }
</style>
</head>

<body>

<section>
  <canvas id="gravityCanvas"></canvas>

  <div class="content">
    <div class="badge">Title No 1</div>

    <h1>
      Your <span class="gradient-text">Title</span>
    </h1>

    <p class="subtitle">
      Tag line or a brief description that highlights your expertise and passion in a concise manner.
    </p>

    <div class="buttons">
      <a href="" class="btn-primary">Primary Button</a>
      <a href="" class="btn-outline">Secondary Button</a>
    </div>
  </div>

</section>

<script>
const canvas = document.getElementById("gravityCanvas");
const ctx = canvas.getContext("2d");

const TRAIL_LENGTH = 15;
let particles = [];
let mouse = { x: 0, y: 0, active: false };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createParticles();
}

function createParticles() {
  const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 30);
  particles = [];

  for (let i = 0; i < count; i++) {
    const hue = 180 + Math.random() * 100;
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      size: Math.random() * 2 + 2,
      color: hsla(hue, 90%, 65%, 1),
      distance: Math.random() * 100 + 100,
      history: []

    });
  }
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("mousemove", e => {
  mouse = { x: e.clientX, y: e.clientY, active: true };
});
window.addEventListener("mouseleave", () => mouse.active = false);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.history.push({ x: p.x, y: p.y });
    if (p.history.length > TRAIL_LENGTH) p.history.shift();

    if (mouse.active) {
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 500 && dist > 0) {
        const targetRadius = p.distance;
        const distError = dist - targetRadius;

        const pullStrength = 0.002;
        p.vx -= dx * pullStrength * (distError / 50);
        p.vy -= dy * pullStrength * (distError / 50);

        const orbitSpeed = 0.2;
        const speedFactor = Math.max(0.1, (800 - dist) / 800);
        p.vx += (-dy / dist) * orbitSpeed * speedFactor;
        p.vy += (dx / dist) * orbitSpeed * speedFactor;
      }

      p.vx *= 0.985;
      p.vy *= 0.985;
    } else {
      p.vx += (Math.random() - 0.5) * 0.1;
      p.vy += (Math.random() - 0.5) * 0.1;
      p.vx *= 0.995;
      p.vy *= 0.995;
    }

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < -50) p.x = canvas.width + 50;
    if (p.x > canvas.width + 50) p.x = -50;
    if (p.y < -50) p.y = canvas.height + 50;
    if (p.y > canvas.height + 50) p.y = -50;

    for (let i = 0; i < p.history.length - 1; i++) {
      const opacity = (i / p.history.length) * 0.5;
      const point = p.history[i];
      const nextPoint = p.history[i + 1];

      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(nextPoint.x, nextPoint.y);
      ctx.lineWidth = p.size * (i / p.history.length);
      ctx.strokeStyle = p.color.replace("1)", opacity + ")");
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

resizeCanvas();
animate();
</script>

</body>
</html>`,
    isNew: true,
    id: '1',
    preview: 'https://zeervy-monorepo-github-io.vercel.app/GravityCursor.html',
    createdAt: ''
  },
  {
    slug: 'Cards-1',
    name: 'Animated Cards',
    description: 'Animated cards with hover effects and transitions.',
    category: 'cards',
    tags: ['Hover Effects', 'Animations'],
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cards Animation</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,500;1,300&family=Playfair+Display:ital,wght@1,700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/SplitText.min.js"></script>
<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --ink: #0a0a0a;
    --cream: #f5f0e8;
    --rust: #c84b2f;
    --gold: #d4a843;
    --slate: #3a3d4a;
    --mist: #e8ecf0;
  }

  body {
    background: var(--ink);
    color: var(--cream);
    font-family: 'DM Mono', monospace;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }
  #anim-cards .flip-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    border:2px solid rgba(245,240,232,0.08);
    margin-top: 30vh;
  }
  .flip-card {
    perspective: 1000px;
    height: 200px;
    cursor: none;
  }
  .flip-inner {
    width: 100%; height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.7s cubic-bezier(0.4,0,0.2,1);
  }
  .flip-card.flipped .flip-inner { transform: rotateY(180deg); }
  .flip-front, .flip-back {
    position: absolute; inset: 0;
    backface-visibility: hidden;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .flip-front {
    background: #111317;
    border: 1px solid rgba(245,240,232,0.08);
  }
  .flip-back {
    background: var(--rust);
    transform: rotateY(180deg);
  }
  .flip-front .f-icon {
    font-size: 42px;
    margin-bottom: 12px;
    opacity: 0.8;
  }
  .flip-front .f-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 28px;
    letter-spacing: 0.05em;
  }
  .flip-front .f-hint {
    font-size: 10px;
    letter-spacing: 0.2em;
    color: rgba(245,240,232,0.3);
    text-transform: uppercase;
    margin-top: 6px;
  }
  .flip-back .b-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    letter-spacing: 0.05em;
    margin-bottom: 10px;
    color: var(--cream);
  }
  .flip-back .b-text {
    font-size: 12px;
    line-height: 1.7;
    color: rgba(245,240,232,0.85);
  }
</style>
</head>
<body>
<section id="anim-cards">
  <div class="section-label">Flip Cards (Hover)</div>
  <div class="flip-grid">
    <div class="flip-card" id="flip1">
      <div class="flip-inner">
        <div class="flip-front"><div class="f-icon">✦</div><div class="f-title">Strategy</div><div class="f-hint">hover to reveal</div></div>
        <div class="flip-back"><div class="b-title">Strategic Vision</div><div class="b-text">We align brand purpose with audience psychology to build systems that endure.</div></div>
      </div>
    </div>
    <div class="flip-card" id="flip2">
      <div class="flip-inner">
        <div class="flip-front"><div class="f-icon">◈</div><div class="f-title">Design</div><div class="f-hint">hover to reveal</div></div>
        <div class="flip-back"><div class="b-title">Craft & Form</div><div class="b-text">Pixel-perfect executions that balance aesthetic tension with functional clarity.</div></div>
      </div>
    </div>
    <div class="flip-card" id="flip3">
      <div class="flip-inner">
        <div class="flip-front"><div class="f-icon">◉</div><div class="f-title">Technology</div><div class="f-hint">hover to reveal</div></div>
        <div class="flip-back"><div class="b-title">Built to Perform</div><div class="b-text">Code that scales. Interactions that breathe. Systems designed for the long game.</div></div>
      </div>
    </div>
    <div class="flip-card" id="flip4">
      <div class="flip-inner">
        <div class="flip-front"><div class="f-icon">❋</div><div class="f-title">Motion</div><div class="f-hint">hover to reveal</div></div>
        <div class="flip-back"><div class="b-title">Time as Material</div><div class="b-text">Duration, easing, delay — wielded as intentionally as color and form.</div></div>
      </div>
    </div>
  </div>
</section>
</body>
<script>
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('flipped');
    gsap.to(card, { scale: 1.02, duration: 0.3, ease: 'power2.out' });
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('flipped');
    gsap.to(card, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
  });
});
ScrollTrigger.create({
  trigger: '#anim-07',
  start: 'top 80%',
  once: true,
  onEnter: () => {
    gsap.from('.flip-card', { y: 60, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' });
  }
});
</script>`,
    isNew: true,
    id: '2',
    preview: 'https://ameerhamza0252.github.io/ZeervyMonorepo.github.io/Cards',
    createdAt: ''
  },
]

export {MYCOMPONENTS};
export function getComponentsByCategory(category: string): ZeervyComponent[] {
  return MYCOMPONENTS.filter((c) => c.category === category)
}

export function getComponentBySlug(slug: string): ZeervyComponent | undefined {
  return MYCOMPONENTS.find((c) => c.slug === slug)
}
