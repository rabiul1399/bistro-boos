import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="featured-item text-white pt-8 my-16 md:p-8 bg-fixed"
      style={{
        backgroundImage: `url(${featured})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <SectionTitle
        heading={"Chef Recommends"}
        subHeading={"---Should Try---"}
      />

      <div className="bg-gray-400 bg-opacity-50 p-4 md:flex gap-6 mx-auto justify-center rounded items-center">
        <div className="">
          <img
            className="rounded shadow-lg"
            width={800}
            src={featured}
            alt=""
          />
        </div>
        <div className="text-white  w-3/6">
          <h3 className="text-3xl">March 20,2024</h3>
          <h3 className="text-3xl uppercase">Where can I get Some?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quia quod dolor reiciendis, enim maxime amet aperiam magnam non
            laborum magni aliquam error quae facere provident, minima aspernatur
            maiores natus.
          </p>
          <button className="btn btn-outline border-0 border-b-4 border-white text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
