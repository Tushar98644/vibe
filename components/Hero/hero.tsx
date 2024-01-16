'use client'

import { HiOutlineArrowNarrowDown } from "react-icons/hi";

const Scroll = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
};

const Hero = () => {
    return (
        <div className="bg-black text-white flex flex-col px-40 py-40 gap-4 items-start pb-80">
            <strong className="text-8xl font-semibold">Tushar Banik</strong>
            <p className="text-6xl opacity-80 font-medium px-4">I build things for the web.</p>
            <p className="text-xl font-semibold hover:underline pl-4">Read more about me &rarr;</p>
            <div className="absolute bottom-8 left-1/2 cursor-pointer" onClick={Scroll}>
                <HiOutlineArrowNarrowDown size={20} />
            </div>
        </div>
    );
}

export default Hero;