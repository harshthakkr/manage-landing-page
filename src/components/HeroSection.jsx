import CTA from "./CTA";
import illustration from "../assets/illustration-intro.svg";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:items-center md:gap-6 xl:gap-40">
      <img src={illustration} className="max-w-full md:max-w-[50%]" />
      <div className="space-y-4 md:space-y-8 mx-auto">
        <h1 className="text-center max-w-[500px] md:text-left text-6xl md:text-5xl lg:text-6xl font-semibold text-dark-blue tracking-tight leading-tight">
          Bring everyone together to build better products.
        </h1>
        <p className="text-center text-xl md:text-lg lg:text-xl max-w-[450px] md:max-w-[350px] lg:max-w-[420px] mx-auto md:mx-0 md:text-left text-dark-grayish-blue font-light ">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="flex justify-center md:justify-start">
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
