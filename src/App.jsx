
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";


function App() {
  return (
    <>
      <div className="bg-[#0c0c1d] text-gray-200 snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <section id="Homepage" className="h-screen snap-end">
          <Navbar></Navbar>
          <Hero></Hero>
        </section>
        <section id="Services" className="h-screen snap-end"> <Parallax type="services"></Parallax> </section>
        <section id="Portfolio" className="h-screen snap-end"> <Parallax type="portfolio"></Parallax></section>
        <section id="Contact" className="h-screen snap-end">Contact</section>
        <section id="About" className="h-screen snap-end">About</section>
        
      </div>
    </>
  );
}

export default App;
