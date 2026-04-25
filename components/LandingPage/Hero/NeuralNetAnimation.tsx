"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  alphaDir: number;
  isAnchor: boolean;
};

type Pulse = {
  fromIdx: number;
  toIdx: number;
  t: number;
};

const PULSE_SPEED = 0.0012;
const MAX_PULSES = 5;

export default function NeuralNetAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let W = 0;
    let H = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ANCHORS = 5;
    const FIELD = 18;
    const TOTAL = ANCHORS + FIELD;

    const nodes: Node[] = Array.from({ length: TOTAL }, (_, i) => {
      const isAnchor = i < ANCHORS;
      const xMin = W * 0.05;
      return {
        x: xMin + Math.random() * (W - xMin) * 0.95,
        y: H * 0.08 + Math.random() * H * 0.84,
        vx: (Math.random() - 0.5) * (isAnchor ? 0.08 : 0.18),
        vy: (Math.random() - 0.5) * (isAnchor ? 0.08 : 0.18),
        r: isAnchor ? 2.8 + Math.random() * 1.2 : 1.0 + Math.random() * 0.6,
        alpha: Math.random() * 0.4 + 0.3,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
        isAnchor,
      };
    });

    const CONNECT_DIST = 200;
    const ANCHOR_CONNECT_DIST = 280;

    const pulses: Pulse[] = [];

    function spawnPulse() {
      // only travel between anchor nodes
      for (let attempt = 0; attempt < 30; attempt++) {
        const a = Math.floor(Math.random() * ANCHORS);
        const b = Math.floor(Math.random() * ANCHORS);
        if (a === b) continue;
        const dx = nodes[a].x - nodes[b].x;
        const dy = nodes[a].y - nodes[b].y;
        if (Math.sqrt(dx * dx + dy * dy) < ANCHOR_CONNECT_DIST) {
          pulses.push({ fromIdx: a, toIdx: b, t: 0 });
          return;
        }
      }
    }

    // seed initial pulses staggered
    for (let k = 0; k < MAX_PULSES; k++) {
      spawnPulse();
      if (pulses[k]) pulses[k].t = Math.random(); // stagger start positions
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // update nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        const xMin = W * 0.04;
        if (n.x < xMin || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.x = Math.max(xMin, Math.min(W, n.x));
        n.y = Math.max(0, Math.min(H, n.y));

        n.alpha += n.alphaDir * 0.004;
        if (n.alpha > 0.75) { n.alpha = 0.75; n.alphaDir = -1; }
        if (n.alpha < 0.15) { n.alpha = 0.15; n.alphaDir = 1; }
      }

      // draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = (a.isAnchor || b.isAnchor) ? ANCHOR_CONNECT_DIST : CONNECT_DIST;
          if (dist > maxDist) continue;

          const proximity = 1 - dist / maxDist;
          const bothAnchors = a.isAnchor && b.isAnchor;
          const oneAnchor = a.isAnchor || b.isAnchor;

          if (bothAnchors) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(11,83%,52%,${proximity * 0.55})`;
            ctx.lineWidth = proximity * 1.4;
            ctx.stroke();
          } else if (oneAnchor) {
            const anchorNode = a.isAnchor ? a : b;
            const fieldNode = a.isAnchor ? b : a;
            const grad = ctx.createLinearGradient(anchorNode.x, anchorNode.y, fieldNode.x, fieldNode.y);
            grad.addColorStop(0, `hsla(11,83%,52%,${proximity * 0.4})`);
            grad.addColorStop(1, `rgba(255,255,255,${proximity * 0.08})`);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${proximity * 0.07})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      // update & draw pulses
      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        p.t += PULSE_SPEED;

        if (p.t >= 1) {
          pulses.splice(k, 1);
          spawnPulse();
          continue;
        }

        const from = nodes[p.fromIdx];
        const to = nodes[p.toIdx];
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > ANCHOR_CONNECT_DIST * 1.1) {
          pulses.splice(k, 1);
          spawnPulse();
          continue;
        }

        const px = from.x + dx * p.t;
        const py = from.y + dy * p.t;

        // short soft trail
        const trailT = Math.max(0, p.t - 0.12);
        const tx = from.x + dx * trailT;
        const ty = from.y + dy * trailT;
        const trail = ctx.createLinearGradient(tx, ty, px, py);
        trail.addColorStop(0, "hsla(11,83%,60%,0)");
        trail.addColorStop(1, "hsla(11,83%,60%,0.5)");
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(px, py);
        ctx.strokeStyle = trail;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // head dot
        const head = ctx.createRadialGradient(px, py, 0, px, py, 4);
        head.addColorStop(0, "hsla(11,83%,75%,0.9)");
        head.addColorStop(1, "hsla(11,83%,52%,0)");
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = head;
        ctx.fill();
      }

      // draw nodes
      for (const n of nodes) {
        if (n.isAnchor) {
          const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
          glow.addColorStop(0, `hsla(0,90%,42%,${n.alpha * 0.3})`);
          glow.addColorStop(1, `hsla(11,83%,52%,0)`);
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(0,90%,50%,${n.alpha})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${n.alpha * 0.5})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c1c_8%,transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#1c1c1c_0%,transparent_20%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
