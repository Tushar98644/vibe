import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
          <Analytics />
          <SpeedInsights />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
