import { FC } from "react";
import Link from "next/link";

import Button from "@/components/button";
import SectionHeader from "@/components/section-header";
import PlatformCard from "./platform-card";

import IC_Mobile from "@/assets/icon/IC_Mobile";
import IC_Desktop from "@/assets/icon/IC_Desktop";
import IC_Console from "@/assets/icon/IC_Console";

const Platforms: FC = () => {
  const platforms = [
    {
      title: "Mobile",
      subTitle: "Android - iOS - Amazon Fire Tablets",
      icon: <IC_Mobile />,
    },
    {
      title: "PC",
      subTitle: "Windows PC - MacOS- Chrome OS",
      icon: <IC_Desktop />,
    },
    {
      title: "Game Consoles",
      subTitle: "Xbox Series S - Xbox Series X - PS5 - PS4",
      icon: <IC_Console />,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10">
      <SectionHeader
        title="Watch LuMovie on All Platforms"
        subTitle="You can watch LuMovie simultaneously on 3 different devices such as mobile, tablet, laptop, TV, etc."
      />
      <div className="grid w-full grid-cols-1 gap-6 px-4 max-w-limit sm:grid-cols-2 lg:grid-cols-3">
        {platforms.map((platform, index) => {
          return (
            <PlatformCard
              key={index}
              title={platform.title}
              subTitle={platform.subTitle}
              icon={platform.icon}
            />
          );
        })}
      </div>
      <Link href="/downloads">
        <Button text="Go To Downloads" isCta />
      </Link>
    </section>
  );
};

export default Platforms;
