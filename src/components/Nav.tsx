import Link from "next/link";
import { motion } from "framer-motion";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

type navProps = {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
};

const Nav = ({ containerStyles, underlineStyles, linkStyles }: navProps) => {
  const about: { title: string; href: string; description: string }[] = [
    {
      title: "About me",
      href: "/about",
      description: "Learn more about me and what I do.",
    },
    {
      title: "Projects",
      href: "/projects",
      description: "All projects i have been developing during my career.",
    },
  ];

  const resumes: { title: string; href: string; description: string }[] = [
    {
      title: "English resume",
      href: "https://drive.google.com/file/d/1fzgt3aZifpmzbxWT8u-ueYg813Mr0-ar/view?usp=sharing",
      description: "My professional resume in english.",
    },
    {
      title: "Portuguese resume",
      href: "https://drive.google.com/file/d/1UEYEmUZy2WnBCkC-MxKW0mPBqfSgP5nj/view?usp=sharing",
      description: "My professional resume in portuguese.",
    },
  ];

  return (
    <>
      <div className={`${containerStyles}`}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col w-[320px] gap-3 p-4">
                  {about.map((about) => (
                    <ListItem
                      key={about.title}
                      title={about.title}
                      href={about.href}
                    >
                      {about.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resumes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col w-[300px] gap-3 p-4">
                  {resumes.map((resumes) => (
                    <ListItem
                      key={resumes.title}
                      title={resumes.title}
                      href={resumes.href}
                    >
                      {resumes.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="https://medium.com/@marioalvesneto"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  target="_blank"
                  className={navigationMenuTriggerStyle()}
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://tally.so/r/mOLbDg" legacyBehavior passHref>
                <NavigationMenuLink
                  target="_blank"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link href={props.href ?? "/"} passHref>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </Link>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default Nav;
