const Feature = ({ number, title, para }) => {
  return (
    <div className="flex items-start gap-6 mb-10">
      <div className="bg-bright-red px-6 py-2 font-semibold rounded-full text-white">
        {number}
      </div>
      <div>
        <h5 className="font-semibold text-lg text-dark-blue mt-2 mb-4">
          {title}
        </h5>
        <p className="text-dark-grayish-blue text-md">{para}</p>
      </div>
    </div>
  );
};

export default Feature;
