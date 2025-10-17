import bgImage from "../../public/background.png";
import Hero from "@/components/hero";
import Information from "@/components/information";
import Advantage from "@/components/advantage";
import Product from "@/components/product";
import Pesan from "@/components/pesan";


function Home() {
  return (
    <main>
      <Background />
      <Hero />
      <Information />
      <Advantage />
      <Product />
      <Pesan />
    </main>
  );
}

function Background() {
  return (
    <div
      aria-hidden
      style={{ backgroundImage: `url(${bgImage.src})` }}
      className="bg-repeat bg-auto bg-top-left z-[-1] opacity-10 pointer-events-none fixed inset-0"
    />
  );
}

export default Home;
