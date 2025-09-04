import Hero from "@/components/Hero";
import FavIcon from "@/app/favicon.ico";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center px-5 pt-5 pb-0 xl:px-0 dark:bg-background">
      <head>
        <link rel="stylesheet" href={FavIcon.src} />
      </head>
      <div className="flex flex-col gap-8 items-center justify-center w-full h-full">
        <Hero />
      </div>
    </main>
  );
}
