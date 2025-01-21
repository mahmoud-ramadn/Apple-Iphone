import gsap from "gsap";
import { debounce } from "lodash";
import { smallHeroVideo, heroVideo } from "../utils";
import { useState, useEffect } from "react";

const Hero = () => {
  const [video, setVideo] = useState("");

  const handleVideo = () => {
    setVideo(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  };

  useEffect(() => {
    // Set initial video based on window size
    handleVideo();

    // Debounced resize event listener
    const debouncedHandleVideo = debounce(handleVideo, 200);
    window.addEventListener("resize", debouncedHandleVideo);

    return () => {
      window.removeEventListener("resize", debouncedHandleVideo);
    };
  }, []);

  useEffect(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });
    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      y: -50,
    });
  }, []);

  return (
    <section className="nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline
            key={video}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        className="flex flex-col items-center opacity-0 translate-y-20"
        id="cta"
      >
        <a href="#highlights" className="btn">
          Mervat Ramadn
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
