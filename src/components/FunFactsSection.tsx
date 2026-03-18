import { useEffect, useRef, useState } from "react";

const facts = [
  { emoji: "🎨", label: "Favorite Color", value: "Black 🖤 & Red ❤️" },
  { emoji: "🍕", label: "Favorite Food", value: "Shawarma 🥙" },
  { emoji: "🏏", label: "Favorite Cricketer", value: "Virat Kohli" },
  { emoji: "🎮", label: "Hobby", value: "Playing with Friends" },
];

const FunFactsSection = () => {
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
    <section className="py-20 bg-primary">
      <div ref={ref} className="container mx-auto px-6 max-w-4xl">
        <h2 className={`font-display text-4xl md:text-5xl font-bold text-primary-foreground text-center mb-12 transition-all duration-700 ${visible ? "animate-slide-up opacity-100" : "opacity-0"}`}>
          Fun Facts About Me 🎉
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`bg-card rounded-2xl p-6 flex items-center gap-4 shadow-lg hover-pop transition-all duration-500 ${visible ? "animate-pop-in opacity-100" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="text-4xl flex-shrink-0">{fact.emoji}</div>
              <div>
                <p className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wide">{fact.label}</p>
                <p className="font-display text-xl font-bold text-foreground">{fact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
