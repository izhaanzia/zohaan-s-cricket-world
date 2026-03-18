import { useEffect, useRef, useState } from "react";

const achievements = [
  { emoji: "🏆", title: "Won School Match", desc: "Led my team to victory!" },
  { emoji: "⭐", title: "Best Player in Group", desc: "Scored the most runs!" },
  { emoji: "🎯", title: "Best Fielder Award", desc: "Caught the most catches!" },
];

const AchievementsSection = () => {
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
    <section className="py-20 bg-muted">
      <div ref={ref} className="container mx-auto px-6 max-w-4xl">
        <h2 className={`font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-12 transition-all duration-700 ${visible ? "animate-slide-up opacity-100" : "opacity-0"}`}>
          My Achievements 🏅
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <div
              key={item.title}
              className={`bg-card rounded-2xl p-8 text-center shadow-lg border-4 border-accent/30 hover-pop transition-all duration-500 ${visible ? "animate-pop-in opacity-100" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-muted-foreground font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
