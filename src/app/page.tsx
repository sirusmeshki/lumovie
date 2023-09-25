import FAQ from "@/components/faq";
import Hero from "@/components/home/hero";
import Platforms from "@/components/home/platforms";
import TV from "@/components/home/tv";
import Plans from "@/components/plans";

import { FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <Hero />
      <Platforms />
      <TV />
      <Plans hasPattern={true} />
      <FAQ />
    </main>
  );
};

export default Home;
