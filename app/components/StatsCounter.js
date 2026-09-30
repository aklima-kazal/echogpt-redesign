"use client";

import { useEffect, useRef, useState } from "react";

function Counter({
  end,
  duration = 1800,
  suffix = "",
  prefix = "",
  decimals = 0,
}) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValue(end * easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, end, duration]);

  return (
    <div ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12 py-5 px-6 glass-card rounded-2xl text-center">

      {/* Global Users */}
      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-purple-300">
          <Counter
            end={500}
            suffix="K+"
            duration={2000}
          />
        </div>

        <div className="text-xs text-slate-400 mt-1 font-medium">
          Global Users
        </div>
      </div>

      {/* Frontier Models */}
      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-white">
          <Counter
            end={10}
            suffix="+"
            duration={1600}
          />
        </div>

        <div className="text-xs text-slate-400 mt-1 font-medium">
          Frontier Models
        </div>
      </div>

      {/* Avg Latency */}
      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-purple-300">
          <Counter
            end={300}
            prefix="< "
            suffix="ms"
            duration={1800}
          />
        </div>

        <div className="text-xs text-slate-400 mt-1 font-medium">
          Avg Latency
        </div>
      </div>

      {/* Store Rating */}
      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-white">
          <Counter
            end={4.9}
            suffix=" / 5"
            decimals={1}
            duration={1800}
          />
        </div>

        <div className="text-xs text-slate-400 mt-1 font-medium">
          Store Rating
        </div>
      </div>

    </div>
  );
}
