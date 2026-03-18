import { useEffect, useState } from "react";

export function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const hero = document.getElementById("hero");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setLight(heroBottom > 60);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrolled, light };
}
