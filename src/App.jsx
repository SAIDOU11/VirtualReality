import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="font-noto">
      <Navbar />
      <div className="max-w-xl mx-auto pt-20 px-6">
        <Hero />
      </div>
    </div>
  );
};

export default App;
