import confetti from "canvas-confetti";
import heroCricket from "@/assets/hero-cricket.png";

const HeroSection = () => {
  const handleExplore = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#3B82F6", "#22C55E", "#F97316", "#FBBF24", "#EC4899"],
    });
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  return (
    <section className="min-h-screen bg-primary flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 text-center lg:text-left z-10">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4 animate-pop-in">
            Hi, I'm Zohaan Zia 👋
          </h1>
          <p className="font-display text-2xl md:text-3xl text-primary-foreground/90 mb-8 animate-slide-up">
            A Young Cricket Lover 🏏
          </p>
          <button
            onClick={handleExplore}
            className="bg-accent text-accent-foreground font-display text-xl font-bold px-10 py-5 rounded-2xl hover-pop shadow-lg cursor-pointer"
          >
            Explore My World 🚀
          </button>
        </div>
        <div className="flex-1 flex justify-center z-10">
          <img
            src={heroCricket}
            alt="Zohaan playing cricket"
            className="w-72 md:w-96 animate-bounce-slow drop-shadow-2xl"
          />
        </div>
      </div>
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-foreground/10 animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-primary-foreground/5 animate-bounce-slow" />
      <div className="absolute top-1/3 right-10 w-20 h-20 rounded-full bg-accent/30 animate-float" />
    </section>
  );
};

export default HeroSection;
