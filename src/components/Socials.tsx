import React from "react";

import {
  RiGithubFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiTwitterXFill,
  RiDiscordFill,
  RiSteamFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "/",
    name: <RiInstagramFill />,
    title: "Instagram",
  },
  {
    path: "/",
    name: <RiGithubFill />,
    title: "Github",
  },
  {
    path: "/",
    name: <RiTwitterXFill />,
    title: "X",
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
    title: "LinkedIn",
  },
  {
    path: "/",
    name: <RiDiscordFill />,
    title: "Discord",
  },
  {
    path: "/",
    name: <RiSteamFill />,
    title: "Steam",
  },
];

interface SocialsProps {
  containerStyles: string;
  iconsStyles: string;
}

const Socials = ({ containerStyles, iconsStyles }: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link title={icon.title} href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
