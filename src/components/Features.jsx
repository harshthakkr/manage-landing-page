import Feature from "./Feature";

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
      <div className="text-center md:text-left">
        <h2 className="text-4xl tracking-tighter font-semibold text-dark-blue mb-6 md:mb-10">
          What's different about Manage?
        </h2>
        <p className="text-dark-grayish-blue text-lg font-light">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div>
        <Feature
          number="01"
          title="Track company-wide progress"
          para="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
        />
        <Feature
          number="02"
          title="Advanced built-in reports"
          para="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
        />
        <Feature
          number="03"
          title="Everything you need in one place"
          para="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
        />
      </div>
    </div>
  );
};

export default Features;
