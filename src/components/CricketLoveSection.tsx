import { useEffect, useRef, useState } from "react";

const CricketLoveSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div ref={ref} className={`container mx-auto px-6 max-w-4xl text-center transition-all duration-700 ${visible ? "animate-slide-up opacity-100" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
          My Cricket Love 🏏
        </h2>
        <div className="bg-card text-foreground rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex justify-center gap-6 mb-6 text-6xl">
            <span className="animate-wiggle inline-block">🏏</span>
            <span className="animate-bounce-slow inline-block">🏐</span>
            <span className="animate-float inline-block">🏆</span>
          </div>
          <p className="text-lg md:text-xl font-body font-medium leading-relaxed">
            Cricket is my <span className="text-accent font-bold">favorite game</span>! I love{" "}
            <span className="text-primary font-bold">batting</span> and hitting{" "}
            <span className="text-secondary font-bold">sixes</span>! ⚡ 🇮🇳
          </p>
        </div>
      </div>
    </section>
  );
};

export default CricketLoveSection;
