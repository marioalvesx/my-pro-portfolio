import Link from "next/link";

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
import LanguageTranslation from "@/shared/language-provider/LanguageProvider";

type navProps = {
  containerStyles: string;
  isMobile?: boolean;
};

const Nav = ({ containerStyles, isMobile = false }: navProps) => {
  const about: { title: any; href: string; description: any }[] = [
    {
      title: <LanguageTranslation id={"about.me"} />,
      href: "/about",
      description: <LanguageTranslation id={"about.me.one"} />,
    },
    {
      title: <LanguageTranslation id={"projects.title"} />,
      href: "/projects",
      description: <LanguageTranslation id={"projects.me"} />,
    },
  ];

  const resumes: { title: any; href: string; description: any }[] = [
    {
      title: <LanguageTranslation id={"resume.me.enus"} />,
      href: "https://drive.google.com/file/d/1VsEKWrObaE9uP8Um-4z0lsmEv9iUFuCP/view?usp=sharing",
      description: LanguageTranslation({ id: "resume.english.description" }),
    },
    {
      title: <LanguageTranslation id={"resume.me.ptbr"} />,
      href: "https://drive.google.com/file/d/1UEYEmUZy2WnBCkC-MxKW0mPBqfSgP5nj/view?usp=sharing",
      description: <LanguageTranslation id={"resume.portuguese.description"} />,
    },
  ];

  if (isMobile) {
    return (
      <div className={`${containerStyles}`}>
        <div className="flex flex-col w-full gap-y-6">
          <div className="flex flex-col gap-y-3">
            <div className="text-lg font-semibold">
              <LanguageTranslation id={"about.me"} />
            </div>
            {about.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="pl-4 py-2 hover:bg-accent rounded-md transition-colors"
              >
                <div className="font-medium">{item.title}</div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Resumes Section */}
          <div className="flex flex-col gap-y-3">
            <div className="text-lg font-semibold">
              <LanguageTranslation id={"resumes"} />
            </div>
            {resumes.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                className="pl-4 py-2 hover:bg-accent rounded-md transition-colors"
              >
                <div className="font-medium">{item.title}</div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Blog Link */}
          <Link
            href="https://medium.com/@marioalvesneto"
            target="_blank"
            className="pl-4 py-2 hover:bg-accent rounded-md transition-colors text-lg"
          >
            Blog
          </Link>

          {/* Contact Link */}
          <Link
            href="https://tally.so/r/mOLbDg"
            target="_blank"
            className="pl-4 py-2 hover:bg-accent rounded-md transition-colors text-lg"
          >
            <LanguageTranslation id={"contact.me"} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${containerStyles}`}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <LanguageTranslation id={"about.me"} />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="z-[999]">
              <ul className="flex flex-col w-[320px] gap-3 p-4 z-[999]">
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
            <NavigationMenuTrigger>
              <LanguageTranslation id={"resumes"} />
            </NavigationMenuTrigger>
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
                <LanguageTranslation id={"contact.me"} />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
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
