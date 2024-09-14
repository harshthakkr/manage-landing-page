import backgroundImg from "../assets/bg-simplify-section-desktop.svg";
import CTA from "./CTA";

const Simplify = () => {
  return (
    <div
      className="bg-bright-red flex flex-col md:flex-row items-center justify-center md:justify-between px-12 lg:px-32 gap-6"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        height: "250px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-center md:text-left text-very-light-gray max-w-96 text-3xl font-semibold">
        Simplify how your team works today.
      </h3>
      <CTA isSimplify={true} />
    </div>
  );
};

export default Simplify;
