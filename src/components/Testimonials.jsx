import TestimonialCard from "./TestimonialCard";
import avatarAnisha from "../assets/avatar-anisha.png";
import avatarAli from "../assets/avatar-ali.png";
import avatarRichard from "../assets/avatar-richard.png";
import avatarShanai from "../assets/avatar-shanai.png";
import CTA from "./CTA";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="testimonial-section mb-40 px-4">
      <h4 className="text-center mb-10 text-4xl text-dark-blue font-semibold">
        What they've said
      </h4>

      <div
        className="embla overflow-hidden max-w-xl mx-auto shadow-xl rounded-3xl"
        ref={emblaRef}
      >
        <div className="embla__container flex ">
          <div className="embla__slide flex-shrink-0 w-full px-4">
            <TestimonialCard
              authorImg={avatarAnisha}
              author="Anisha Li"
              content={`“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”`}
            />
          </div>
          <div className="embla__slide flex-shrink-0 w-full px-4">
            <TestimonialCard
              authorImg={avatarAli}
              author="Ali Bravo"
              content={`“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”`}
            />
          </div>
          <div className="embla__slide flex-shrink-0 w-full px-4">
            <TestimonialCard
              authorImg={avatarRichard}
              author="Richard Watts"
              content={`“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”`}
            />
          </div>
          <div className="embla__slide flex-shrink-0 w-full px-4">
            <TestimonialCard
              authorImg={avatarShanai}
              author="Shanai Gough"
              content={`“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”`}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <CTA />
      </div>
    </div>
  );
};

export default Testimonials;
