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
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiTwitterXFill />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiDiscordFill />,
  },
  {
    path: "/",
    name: <RiSteamFill />,
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
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
