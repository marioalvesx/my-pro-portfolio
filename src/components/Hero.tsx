"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { stagger } from "motion";
import { Mail, FileText, User, FolderGit2, MessagesSquare } from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import LanguageTranslation from "@/shared/language-provider/LanguageProvider";
import Socials from "./Socials";
import {
  borderExpandCenter,
  borderSlideLeftToRight,
  borderSlideRightToLeft,
  fadeIn,
} from "@/utils/motionEffects";

const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 0.84, 0.44, 1] as [number, number, number, number],
      when: "beforeChildren" as string,
      delayChildren: stagger(0.08),
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 0.84, 0.44, 1] as [number, number, number, number],
    },
  },
};

interface BentoCardProps {
  href: string;
  external?: boolean;
  number: string;
  title: string | JSX.Element;
  description: string | JSX.Element;
  icon: React.ReactNode;
  className?: string;
}

function BentoCard({
  href,
  external = false,
  number,
  title,
  description,
  icon,
  className = "",
}: BentoCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const CardContent = (
    <motion.div
      className={`bento-card group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 ${className}`}
      variants={itemVariants}
      initial="hidden"
      animate="show"
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        boxShadow: isHovered
          ? "0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)"
          : "0 1px 3px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Number Badge */}
      <motion.div
        className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-muted/50 text-sm font-bold text-muted-foreground backdrop-blur-sm"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {number}
      </motion.div>

      {/* Icon */}
      <motion.div
        className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary"
        animate={{
          scale: isHovered ? 1.05 : 1,
          rotate: isHovered ? 0 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <div className="space-y-3">
        <motion.h3
          className="text-2xl font-bold leading-tight transition-colors duration-300"
          animate={{
            color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))",
          }}
        >
          {title}
        </motion.h3>
        <p className="text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Animated Border Gradient */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Subtle Shine Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
        }}
        animate={{
          x: isHovered ? "100%" : "-100%",
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {CardContent}
      </a>
    );
  }

  return (
    <Link href={href} className="block">
      {CardContent}
    </Link>
  );
}

export default function Hero() {
  return (
    <div className="min-h-screen bg-background">
      <motion.div
        className="mx-auto max-w-8xl px-16 py-14"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        {/* <motion.div
          className="w-full flex items-center justify-between mb-16"
          variants={itemVariants}
        >
          
        </motion.div> */}

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Side - Presentation (Static) */}
          <motion.section
            className="p-5 h-full lg:col-span-5 space-y-8 lg:sticky lg:top-24 lg:self-start"
            variants={itemVariants}
            style={{ maxHeight: "calc(100vh - 6rem)" }}
          >
            <motion.div
              className="w-full flex items-center justify-between mb-10 pr-12"
              variants={itemVariants}
            >
              <motion.div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-foreground transition duration-300 ease-in">
                <span>Porto Alegre, RS</span>
              </motion.div>
              <motion.div
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 opacity-50 hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
              >
                <ThemeToggler />
              </motion.div>
            </motion.div>

            {/* Availability Badge */}
            <div className="h-[90%] flex flex-col pt-[18%] gap-8">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wider"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="relative flex h-2 w-2 rounded-full bg-gray-500">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500"></span>
                </span>
                <LanguageTranslation id={"hero.availability"} />
              </motion.div>

              {/* Name and Title */}
              <div className="space-y-6">
                <motion.h1
                  className="text-3xl sm:text-3xl lg:text-6xl font-bold leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Mario Alves Neto
                </motion.h1>
                <motion.p
                  className="text-xl sm:text-1xl text-muted-foreground leading-relaxed w-[85%] pt-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <LanguageTranslation id={"hero.title"} />
                </motion.p>
                <motion.p
                  className="text-base text-muted-foreground leading-relaxed w-[85%]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <LanguageTranslation id={"hero.description"} />
                </motion.p>
              </div>

              {/* Email Link */}
              <motion.a
                href="mailto:marioalvesneto@hotmail.com"
                className="inline-flex items-center gap-2 text-base font-medium transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.span
                  className="relative pb-0.5 inline-block"
                  initial="initial"
                  whileHover="hover"
                >
                  <span className="relative z-10">
                    <LanguageTranslation id={"hero.email"} />
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[1px] bg-current w-full origin-left"
                    variants={borderExpandCenter}
                  />
                </motion.span>
              </motion.a>

              {/* Scroll Indicator */}
              <div className="flex items-end justify-start mt-10">
                <div className="w-6 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2 relative overflow-hidden">
                  <div
                    className="w-2 h-2 bg-white/60 rounded-full absolute animate-scroll"
                    style={{
                      animation: "scrollDown 1.5s ease-in-out infinite",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Right Side - Horizontal Bento Grid */}
          <motion.section
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: [0.16, 0.84, 0.44, 1] }}
          >
            <motion.div
              className="flex flex-col gap-5"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* About Me Card */}
              <BentoCard
                href="/about"
                number="01"
                title={<LanguageTranslation id={"bento.about.title"} />}
                description={
                  <LanguageTranslation id={"bento.about.description"} />
                }
                icon={<User className="h-6 w-6" />}
                className="w-full"
              />

              {/* Projects Card */}
              <BentoCard
                href="/projects"
                number="02"
                title={<LanguageTranslation id={"bento.projects.title"} />}
                description={
                  <LanguageTranslation id={"bento.projects.description"} />
                }
                icon={<FolderGit2 className="h-6 w-6" />}
                className="w-full"
              />

              {/* Resume Card */}
              <BentoCard
                href="https://drive.google.com/file/d/1UEYEmUZy2WnBCkC-MxKW0mPBqfSgP5nj/view?usp=drive_link"
                external
                number="03"
                title={<LanguageTranslation id={"bento.resume.title"} />}
                description={
                  <LanguageTranslation id={"bento.resume.description"} />
                }
                icon={<FileText className="h-6 w-6" />}
                className="w-full"
              />

              {/* Contact Card */}
              <BentoCard
                href="https://tally.so/r/mOLbDg"
                external
                number="04"
                title={<LanguageTranslation id={"bento.contact.title"} />}
                description={
                  <LanguageTranslation id={"bento.contact.description"} />
                }
                icon={<MessagesSquare className="h-6 w-6" />}
                className="w-full"
              />
            </motion.div>
          </motion.section>
        </div>

        {/* Footer */}
        {/* <motion.footer
          className="mt-20 rounded-3xl border border-border bg-card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 0.84, 0.44, 1] }}
        >
          <div className="p-8 flex flex-col items-center justify-center gap-6">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              <LanguageTranslation id={"bento.socials.title"} />
            </h3>
            <Socials
              containerStyles="flex items-center gap-4 flex-wrap justify-center"
              iconsStyles="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:scale-110 h-10 w-10 text-primary dark:text-white/70 text-[21px]"
            />
          </div>
          <div className="w-full h-[1px] bg-border" />
          <div className="p-6 flex items-center justify-center">
            <span className="text-sm text-muted-foreground">
              ©2025 - Mario Alves
            </span>
          </div>
        </motion.footer> */}
      </motion.div>
    </div>
  );
}
