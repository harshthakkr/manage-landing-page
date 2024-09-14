const TestimonialCard = ({ authorImg, author, content }) => {
  return (
    <div className="relative rounded-lg p-8 text-center max-w-md mx-auto mt-16">
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
        <img
          src={authorImg}
          alt={`${author}'s avatar`}
          className="w-24 h-24 rounded-full border-4 border-white object-cover"
        />
      </div>

      <div className="mt-12">
        <p className="text-dark-blue font-semibold text-xl mb-4">{author}</p>
        <p className="text-dark-grayish-blue font-light">{content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
