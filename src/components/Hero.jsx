import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-10 sm:mt-14 lg:mt-20 ">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          VR build tools
          <span className="bg-gradient-to-r from-blue-light-vr to-blue-500 text-transparent bg-clip-text">
            {} for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-white max-w-4xl">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          immagination into immersive reality!
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-blue-light-vr to-blue-darker-vr py-2 px-3 mx-3 rounded-md text-black font-bold"
          >
            Start for free
          </a>
          <a href="#" className="py-2 px-3 mx-3 rounded-md border ">
            Documentation
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-10 ">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-light-vr mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser doesn't allow the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-light-vr mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser doesn't allow the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
