/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLenis } from '@studio-freight/react-lenis';

const About = () => {

    const opacityForBlock = (sectionProgress: number, blockNumber: number) => {
        const progress = sectionProgress - blockNumber;

        if (progress >= 0 && progress < 1) {
            return 1;
        }

        return 0.2;
    }

    const [scrollY, setScrollY] = useState(0);

    useLenis(({ scroll }: any) => {
      setScrollY(scroll);
    });
  
    const refContainer = useRef<HTMLDivElement>(null);
    const numOfPages = 3;
    let progress = 0;
    const { current: elContainer } = refContainer;
  
    if (elContainer) {
      const { clientHeight, offsetTop } = elContainer;
      const screenH = window.innerHeight;
      const halfH = screenH / 2;
  
      const percentY =
        Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) /
        clientHeight;
  
      progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
    }

    return (
        <div ref={refContainer} className="bg-white h-[100vh] flex flex-col justify-center px-40 gap-6 font-semibold text-7xl">
            <motion.p style={{ opacity: opacityForBlock(progress, 0) }}>
                I love coding.
            </motion.p>
            <motion.p style={{ opacity: opacityForBlock(progress, 1) }}>I use my passion and skills to build digital products and experiences.</motion.p>
            <motion.p style={{ opacity: opacityForBlock(progress, 2) }}>Im passionate about cutting-edge, pixel perfect UI and intuitively implemented UX.</motion.p>
        </div>
    );
};

export default About;
