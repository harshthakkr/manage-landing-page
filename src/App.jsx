import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Simplify from "./components/Simplify";
import bg from "./assets/bg-tablet-pattern.svg";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="font-be-vietnam-pro bg-very-light-gray">
      <div className="px-4 py-8 lg:px-16 lg:py-12 xl:px-24 xl:py-16">
        <div className="mb-40">
          <Navbar />
          <HeroSection />
        </div>
        <Features />
      </div>
      <Testimonials />
      <Simplify />
      <Footer />
    </div>
  );
}

export default App;
