// app/page.js
import Hero from "@/components/Hero";
import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-md animate-fade-in">
        <Hero />
        <GetStarted />
      </div>
    </main>
  );
}
