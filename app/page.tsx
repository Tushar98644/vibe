/* eslint-disable react/jsx-no-undef */
import { ScrollProvider } from "@/Providers/ScrollProvider";
import { Hero, About, Work } from "@/components";
import { Fragment } from "react";

export default function Home() {
  return (
    <ScrollProvider>
      <Fragment>
        <Hero />
        <About />
        <Work />
      </Fragment>
    </ScrollProvider>
  );
}
