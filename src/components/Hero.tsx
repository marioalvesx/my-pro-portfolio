"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { stagger } from "motion";
import {
  FileText,
  User,
  FolderGit2,
  MessagesSquare,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import LanguageTranslation from "@/shared/language-provider/LanguageProvider";
import { borderExpandCenter } from "@/utils/motionEffects";

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

const EASE = [0.65, 0, 0.35, 1] as [number, number, number, number];

/* ============================================================
   BentoRow - Linha única representando UMA opção
   Alterna qual lado é o menor/maior via prop `reverse`
   ============================================================ */
interface BentoRowProps {
  href: string;
  external?: boolean;
  number: string;
  subtitle: string | JSX.Element;
  title: string | JSX.Element;
  description: string | JSX.Element;
  icon: React.ReactNode;
  /** Se true, o card MENOR fica à direita (inverte a linha) */
  reverse?: boolean;
  /** Cores tematicas aplicadas no hover */
  hoverBg: string; // ex: "#A855F7" (roxo)
  hoverFg: string; // ex: "#FFFFFF"
}

function BentoRow({
  href,
  external = false,
  number,
  subtitle,
  title,
  description,
  icon,
  reverse = false,
  hoverBg,
  hoverFg,
}: BentoRowProps) {
  const [hovered, setHovered] = React.useState(false);

  // Proporções: pequeno = 35, grande = 65. No hover: 48 / 52.
  const smallFlex = hovered ? 48 : 35;
  const largeFlex = hovered ? 52 : 65;

  /* ---------- Card MENOR (muda cor no hover) ---------- */
  const SmallCard = (
    <motion.div
      className="relative overflow-hidden rounded-3xl border cursor-pointer"
      animate={{
        flexGrow: smallFlex,
        backgroundColor: hovered ? hoverBg : "hsl(var(--card))",
        borderColor: hovered ? hoverBg : "hsl(var(--border))",
      }}
      transition={{ duration: 0.6, ease: EASE }}
      style={{ flexBasis: 0 }}
    >
      <div className="flex h-full w-full flex-col justify-between p-8">
        <motion.div
          className="text-xs font-mono font-semibold tracking-widest"
          animate={{
            color: hovered
              ? `${hoverFg}B3` // 70% opacity
              : "hsl(var(--muted-foreground))",
          }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {number}
        </motion.div>

        <div className="space-y-2">
          <motion.p
            className="text-sm leading-relaxed"
            animate={{
              color: hovered
                ? `${hoverFg}CC` // 80% opacity
                : "hsl(var(--muted-foreground))",
            }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {subtitle}
          </motion.p>
          <motion.h3
            className="text-2xl lg:text-3xl font-bold leading-[1.05] tracking-tight"
            animate={{
              color: hovered ? hoverFg : "hsl(var(--foreground))",
            }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {title}.
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );

  /* ---------- Card MAIOR (ícone, número gigante, seta) ---------- */
  const LargeCard = (
    <motion.div
      className="relative overflow-hidden rounded-3xl border border-border bg-card cursor-pointer"
      animate={{ flexGrow: largeFlex }}
      transition={{ duration: 0.6, ease: EASE }}
      style={{ flexBasis: 0 }}
    >
      <div className="relative flex h-full w-full items-center p-8 overflow-hidden">
        {/* Número gigante ao fundo */}
        <motion.div
          aria-hidden
          className="absolute top-1/2 -translate-y-1/2 text-[12rem] font-bold leading-none select-none pointer-events-none"
          style={{
            left: reverse ? "auto" : "18rem",
            right: reverse ? "2rem" : "auto",
            top: reverse ? "12rem" : "12rem",
          }}
          animate={{
            color: hovered
              ? `${hoverBg}26` // ~15% opacity
              : "hsl(var(--muted-foreground) / 0.1)",
          }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {number}
        </motion.div>

        {/* Conteúdo (ícone + descrição) — alinha em lados opostos conforme reverse */}
        <div
          className={`relative z-10 flex items-center gap-6 ${
            reverse ? "mr-auto" : "ml-auto"
          }`}
        >
          {reverse && (
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-2xl shrink-0"
              animate={{
                backgroundColor: hovered
                  ? hoverBg
                  : "hsl(var(--primary) / 0.1)",
                color: hovered ? hoverFg : "hsl(var(--primary))",
              }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              {icon}
            </motion.div>
          )}

          <div
            className={`flex flex-col max-w-[180px] ${
              reverse ? "items-start text-left" : "items-end text-right"
            }`}
          >
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mt-1">
              {description}
            </p>
          </div>

          {!reverse && (
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-2xl shrink-0"
              animate={{
                backgroundColor: hovered
                  ? hoverBg
                  : "hsl(var(--primary) / 0.1)",
                color: hovered ? hoverFg : "hsl(var(--primary))",
              }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              {icon}
            </motion.div>
          )}
        </div>

        {/* Seta diagonal no hover - sempre no canto superior externo */}
        <motion.div
          className={`absolute top-6 z-20 pointer-events-none ${
            reverse ? "left-6" : "right-6"
          }`}
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : reverse ? 8 : -8,
            y: hovered ? 0 : 8,
          }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ color: hoverBg }}
          >
            <ArrowUpRight
              className="h-5 w-5"
              strokeWidth={2.2}
              style={{
                transform: reverse ? "scaleX(-1)" : "none",
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  /* ---------- Monta a linha conforme reverse ---------- */
  const rowContent = (
    <div
      className="flex gap-5 w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minHeight: 240 }}
    >
      {reverse ? (
        <>
          {LargeCard}
          {SmallCard}
        </>
      ) : (
        <>
          {SmallCard}
          {LargeCard}
        </>
      )}
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {rowContent}
      </a>
    );
  }
  return (
    <Link href={href} className="block">
      {rowContent}
    </Link>
  );
}

/* ============================================================
   HERO
   ============================================================ */
export default function Hero() {
  // Paleta temática por opção (hover)
  const themes = {
    about: { bg: "#A855F7", fg: "#FFFFFF" }, // roxo
    projects: { bg: "#3B82F6", fg: "#FFFFFF" }, // azul
    resume: { bg: "#D4B483", fg: "#1A1A1A" }, // bege (igual Penna)
    contact: { bg: "#10B981", fg: "#FFFFFF" }, // verde
    youtube: { bg: "#FF0000", fg: "#FFFFFF" }, // vermelho YouTube
  };

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        className="mx-auto max-w-8xl px-16 py-14"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Side - Presentation */}
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
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 w-9 opacity-50 hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
              >
                <ThemeToggler />
              </motion.div>
            </motion.div>

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
                  className="text-xl text-muted-foreground leading-relaxed w-[85%] pt-5"
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
            </div>
          </motion.section>

          {/* Right Side - Bento em linhas alternadas */}
          <motion.section
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <motion.div
              className="flex flex-col gap-5"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* Linha 1 - About Me (menor à esquerda) */}
              <BentoRow
                href="/about"
                number="01"
                subtitle={<LanguageTranslation id={"bento.about.subtitle"} />}
                title={<LanguageTranslation id={"bento.about.title"} />}
                description={
                  <LanguageTranslation id={"bento.about.description"} />
                }
                icon={<User className="h-6 w-6" />}
                reverse={false}
                hoverBg={themes.about.bg}
                hoverFg={themes.about.fg}
              />

              {/* Linha 2 - Projects (menor à direita) */}
              <BentoRow
                href="/projects"
                number="02"
                subtitle={
                  <LanguageTranslation id={"bento.projects.subtitle"} />
                }
                title={<LanguageTranslation id={"bento.projects.title"} />}
                description={
                  <LanguageTranslation id={"bento.projects.description"} />
                }
                icon={<FolderGit2 className="h-6 w-6" />}
                reverse={true}
                hoverBg={themes.projects.bg}
                hoverFg={themes.projects.fg}
              />

              {/* Linha 3 - Resume (menor à esquerda) */}
              <BentoRow
                href="https://drive.google.com/file/d/1UEYEmUZy2WnBCkC-MxKW0mPBqfSgP5nj/view?usp=drive_link"
                external
                number="03"
                subtitle={<LanguageTranslation id={"bento.resume.subtitle"} />}
                title={<LanguageTranslation id={"bento.resume.title"} />}
                description={
                  <LanguageTranslation id={"bento.resume.description"} />
                }
                icon={<FileText className="h-6 w-6" />}
                reverse={false}
                hoverBg={themes.resume.bg}
                hoverFg={themes.resume.fg}
              />

              {/* Linha 4 - Get in Touch (menor à direita) */}
              <BentoRow
                href="https://tally.so/r/mOLbDg"
                external
                number="04"
                subtitle={<LanguageTranslation id={"bento.contact.subtitle"} />}
                title={<LanguageTranslation id={"bento.contact.title"} />}
                description={
                  <LanguageTranslation id={"bento.contact.description"} />
                }
                icon={<MessagesSquare className="h-6 w-6" />}
                reverse={true}
                hoverBg={themes.contact.bg}
                hoverFg={themes.contact.fg}
              />

              {/* Linha 5 - YouTube (menor à esquerda) */}
              <BentoRow
                href="https://www.youtube.com/@MarioAlvesNetto"
                external
                number="05"
                subtitle={<LanguageTranslation id={"bento.youtube.subtitle"} />}
                title={<LanguageTranslation id={"bento.youtube.title"} />}
                description={
                  <LanguageTranslation id={"bento.youtube.description"} />
                }
                icon={<Youtube className="h-6 w-6" />}
                reverse={false}
                hoverBg={themes.youtube.bg}
                hoverFg={themes.youtube.fg}
              />
            </motion.div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
