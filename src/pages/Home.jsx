import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <section>
      <Header />
      <main className="px-6 flex flex-col items-center">
        <Hero />
      </main>
    </section>
  );
}
