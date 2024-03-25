"use client";

import { motion } from "framer-motion";
import useBreakpoint from "use-breakpoint";
import { portfolioData } from "./constants";
import TimelineItem from "./TimelineItem";

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export default function Timeline() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const reversedTimelineEntries = Object.entries(
    portfolioData.timeline,
  ).reverse();

  return (
    <>
      {reversedTimelineEntries.map(([year, timelineData], index) => (
        <motion.div
          key={year}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index / 10 }}
        >
          <TimelineItem year={year} data={timelineData} />
        </motion.div>
      ))}
      {breakpoint === "desktop"}
    </>
  );
}
