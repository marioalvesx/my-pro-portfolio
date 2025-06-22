import React from "react";

import {
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiDiscordFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/marioalvesneto/",
    name: <RiLinkedinFill />,
    title: "LinkedIn",
  },
  {
    path: "https://github.com/marioalvesx",
    name: <RiGithubFill />,
    title: "Github",
  },
  {
    path: "/",
    name: <RiTwitterXFill />,
    title: "X",
  },
  {
    path: "_marioalves",
    name: <RiDiscordFill />,
    title: "Discord",
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
