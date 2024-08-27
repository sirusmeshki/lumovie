"use client";

import { FC, useState } from "react";

import { Platforms } from "./models";

import IC_Mobile from "@/assets/icon/IC_Mobile";
import IC_Desktop from "@/assets/icon/IC_Desktop";
import IC_Console from "@/assets/icon/IC_Console";
import Devices from "./devices";
import Tabs from "./tabs";

const Download: FC = () => {
    const [activeTab, setActiveTab] = useState<String>("Mobile");
    const [tabs] = useState<Array<Platforms>>([
        {
            name: "Mobile",
            logo: <IC_Mobile />,
            devices: [
                {
                    name: "Google Play",
                    logo: "/assets/icon/GooglePlay.png",
                    info: "Get It on",
                },
                {
                    name: "App Store",
                    logo: "/assets/icon/Apple.png",
                    info: "Download on the ",
                },
                {
                    name: "Android",
                    logo: "/assets/icon/Android.png",
                    info: "Get Direct",
                },
                { name: "Web App", logo: "/assets/icon/LuMovie.png", info: "Use", href: "https://web-lumovie.netlify.app" },
            ],
        },
        {
            name: "Desktop",
            logo: <IC_Desktop />,
            devices: [
                {
                    name: "Windows",
                    logo: "/assets/icon/Windows.png",
                    info: "Download for",
                },
                {
                    name: "App Store",
                    logo: "/assets/icon/Apple.png",
                    info: "Download on the",
                },
                { name: "Web App", logo: "/assets/icon/LuMovie.png", info: "Use", href: "https://web-lumovie.netlify.app" },
            ],
        },
        {
            name: "Game Consoles",
            logo: <IC_Console />,
            devices: [
                { name: "PS4", logo: "/assets/icon/PS4.png" },
                { name: "PS5", logo: "/assets/icon/PS5.png" },
                { name: "XBOX-ONE", logo: "/assets/icon/XBOX-ONE.png" },
                { name: "XBOX-X-S", logo: "/assets/icon/XBOX-S-X.png" },
            ],
        },
    ]);

    return (
        <>
            <h2 className="max-w-5xl px-4 mx-auto text-3xl font-extrabold text-center text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Connect to LuMovie using your favorite devices.
            </h2>
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            <Devices tabs={tabs} activeTab={activeTab} />
        </>
    );
};

export default Download;
