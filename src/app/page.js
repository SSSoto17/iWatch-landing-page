import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="h-screen grid auto-rows-auto">
      <header>
        <Header />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}
