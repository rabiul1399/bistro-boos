const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <p className="text-yellow-600 text-center ">{subHeading}</p>
      <h3 className="border-y-4 w-auto md:w-96 md:p-2 text-center mx-auto uppercase text-3xl my-8">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
