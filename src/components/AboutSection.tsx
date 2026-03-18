import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
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
    <section id="about" className="py-20 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 max-w-3xl text-center transition-all duration-700 ${visible ? "animate-slide-up opacity-100" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
          About Me 🌟
        </h2>
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border-4 border-primary/20 hover-pop">
          <p className="text-lg md:text-xl font-body font-medium text-foreground leading-relaxed">
            I am a <span className="text-primary font-bold">4th class student</span> who loves
            playing <span className="text-secondary font-bold">cricket</span> 🏏 and having fun
            with <span className="text-accent font-bold">friends</span> 👦. I was born on{" "}
            <span className="text-primary font-bold">2nd May 2025</span> 🎂 and every day is a new
            adventure for me! 🎉
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
