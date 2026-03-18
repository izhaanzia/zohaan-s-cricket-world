import { useEffect, useRef, useState } from "react";

const favorites = [
  { emoji: "🏏", title: "Cricket", desc: "My #1 passion!", color: "bg-primary" },
  { emoji: "👦", title: "Playing with Friends", desc: "The best times ever!", color: "bg-secondary" },
  { emoji: "📺", title: "Watching Matches", desc: "Every ball counts!", color: "bg-accent" },
  { emoji: "⭐", title: "Virat Kohli", desc: "My favorite player!", color: "bg-primary" },
];

const FavoritesSection = () => {
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
      <div ref={ref} className="container mx-auto px-6">
        <h2 className={`font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-12 transition-all duration-700 ${visible ? "animate-slide-up opacity-100" : "opacity-0"}`}>
          My Favorite Things 💖
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {favorites.map((item, i) => (
            <div
              key={item.title}
              className={`bg-card rounded-2xl p-6 text-center shadow-lg border-4 border-transparent hover:border-accent hover-pop cursor-default transition-all duration-500 ${visible ? "animate-pop-in opacity-100" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 text-4xl`}>
                {item.emoji}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{item.title}</h3>
              <p className="font-body text-muted-foreground font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoritesSection;
