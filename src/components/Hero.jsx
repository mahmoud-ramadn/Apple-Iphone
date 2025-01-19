import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {  smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";
import heroVideo from "/assets/videos/hero.mp4"

const Hero = () => {
  const [video, setVideo] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const hanldVidoe = () => {
    if (window.innerWidth < 760) {
      setVideo(smallHeroVideo);
    } else {
      setVideo(heroVideo);
    }
  };

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    }),
      gsap.to("#cta", {
        opacity: 1,
        delay: 2,
        y: -50,
      });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", hanldVidoe);
    return () => {
      window.removeEventListener("resize", hanldVidoe);
    };
  }, []);

  return (
    <section className=" nav-height bg-black relative">
      <div className="h-5/6 w-full  flex-center flex-col">
        <p id="hero" className="hero-title">
          iphone 15 pro{" "}
        </p>
        <div className="md:w-10/12 w-9/12 ">
          <video
            className=" pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={video}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        className="flex flex-col items-center opacity-0
              translate-y-20 
 
              
      "
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
