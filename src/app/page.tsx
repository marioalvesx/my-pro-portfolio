import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl flex-col items-center justify-center px-5 py-8 xl:px-0 dark:bg-background">
      <Hero />
    </main>
  );
}
