import { useEffect, useState } from "react";
import image_hero from "../../Assets/image_hero.png";
import "./Hero.css";

export const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3); // slower movement
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="hero"
      style={{
        // Start 35% from top and move it up slightly as you scroll
        backgroundPosition: `center calc(35% - ${offset}px)`,
      }}
    >
      <div className="hero-left">
        <p className="hero-text">
          New
          <br />
          collections
          <br />
          for everyone
          <br />
        </p>
      </div>

      <div className="hero-right">
        <img src={image_hero} alt="" />
      </div>
    </div>
  );
};
