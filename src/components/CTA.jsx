const CTA = ({ isSimplify }) => {
  return (
    <button
      className={`text-sm ${
        isSimplify
          ? `bg-very-light-gray text-bright-red font-semibold hover:text-red-300`
          : `bg-bright-red hover:opacity-75 text-very-light-gray`
      } px-6 lg:px-8 py-4 rounded-full shadow-xl`}
    >
      Get Started
    </button>
  );
};

export default CTA;
