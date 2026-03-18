import { useEffect, useRef, useState } from "react";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";

const images = [
  { src: gallery1, alt: "Kids playing cricket together" },
  { src: gallery2, alt: "Cricket bat, ball and trophy" },
  { src: gallery3, alt: "Watching a cricket match" },
];

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-background">
      <div ref={ref} className="container mx-auto px-6">
        <h2 className={`font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-12 transition-all duration-700 ${visible ? "animate-slide-up opacity-100" : "opacity-0"}`}>
          Gallery 📸
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20 hover-pop transition-all duration-500 ${visible ? "animate-pop-in opacity-100" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
