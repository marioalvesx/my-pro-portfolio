import Hero from "@/components/Hero";
import FavIcon from "@/app/favicon.ico";

export default function Home() {
  return (
    <main className="mx-auto max-w-sm flex-col items-center justify-center px-5 py-8 xl:px-0 my-10 dark:bg-background">
      <head>
        <link rel="stylesheet" href={FavIcon.src} />
      </head>
      <Hero />
    </main>
  );
}
