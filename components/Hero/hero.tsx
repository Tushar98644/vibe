"use client";
import { useEffect } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { renderCanvas } from "./render_canvas";

const Hero = () => {
  const Scroll = () =>
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div className="bg-black text-white flex flex-col px-40 py-40 gap-4 items-start pb-80">
      <strong className="text-8xl font-semibold">Tushar Banik</strong>
      <p className="text-6xl opacity-80 font-medium px-4">
        I build things for the web.
      </p>
      <p className="text-xl cursor-pointer font-semibold underline-magical pl-4">
        Read more about me &rarr;
      </p>
      <div
        className="absolute bottom-8 left-1/2 cursor-pointer"
        onClick={Scroll}
      >
        <HiOutlineArrowNarrowDown size={20} />
      </div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0"
        id="canvas"
      ></canvas>
    </div>
  );
};

export default Hero;
