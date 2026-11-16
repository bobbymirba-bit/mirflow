"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Node = { x: number; y: number; vx: number; vy: number; r: number; hue: number };

const LINK_DISTANCE = 150;
const MAX_SPEED = 0.55;

export function HeroCanvas({ className }: { className?: string }) {
  const ref = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };

    const seed = () => {
      const count = Math.max(36, Math.min(110, Math.round((width * height) / 15000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 1 + Math.random() * 1.5,
        hue: Math.random() < 0.62 ? 188 : 262,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduceMotion) draw(false);
    };

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -24) n.x = width + 24;
        else if (n.x > width + 24) n.x = -24;
        if (n.y < -24) n.y = height + 24;
        else if (n.y > height + 24) n.y = -24;

        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 180 * 180 && d2 > 1) {
          n.vx += dx * 0.00004;
          n.vy += dy * 0.00004;
        }
        const speed = Math.hypot(n.vx, n.vy);
        if (speed > MAX_SPEED) {
          n.vx = (n.vx / speed) * MAX_SPEED;
          n.vy = (n.vy / speed) * MAX_SPEED;
        }
      }
    };

    const draw = (animate: boolean) => {
      if (animate) step();
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DISTANCE) {
            const alpha = (1 - d / LINK_DISTANCE) * 0.32;
            ctx.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 90%, 72%, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.shadowColor = `hsla(${n.hue}, 95%, 65%, 0.9)`;
        ctx.shadowBlur = 10;
        ctx.fillStyle = `hsla(${n.hue}, 95%, 78%, 0.95)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      if (animate && visible) raf = requestAnimationFrame(() => draw(true));
    };

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const next = entry.isIntersecting;
        if (next && !visible && !reduceMotion) {
          visible = true;
          raf = requestAnimationFrame(() => draw(true));
        } else {
          visible = next;
        }
      },
      { threshold: 0.05 }
    );

    resize();
    observer.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    if (!reduceMotion) raf = requestAnimationFrame(() => draw(true));

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={cn("pointer-events-none", className)} />;
}
