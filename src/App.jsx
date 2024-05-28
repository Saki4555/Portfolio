
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="bg-[#475C7A] text-gray-200 snap-y snap-mandatory h-screen overflow-y-scroll">
        <section id="Homepage" className="h-screen snap-end">
          <Navbar></Navbar>
        </section>
        <section id="Services" className="h-screen snap-end bg-yellow-200">Services</section>
        <section id="Portfolio" className="h-screen snap-end">Portfolio</section>
        <section id="Contact" className="h-screen snap-end">Contact</section>
        <section id="About" className="h-screen snap-end">About</section>
        
      </div>
    </>
  );
}

export default App;
