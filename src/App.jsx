import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";

const App = () => {
  return (
    <div className="font-noto">
      <Navbar />
      <div className="max-w-xl lg:max-w-[70%] mx-auto pt-20 px-6">
        <Hero />
        <Feature />
      </div>
    </div>
  );
};

export default App;
