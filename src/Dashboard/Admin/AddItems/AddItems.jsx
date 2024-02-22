import SectionTitle from "../../../Pages/Shared/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
const AddItems = () => {
  return (
    <div>
      <SectionTitle subHeading="---Hurry Up!---" heading="Add an Items" />
      <div className="m-8 bg-base-200 shadow rounded py-8 ">
        <form className="mx-16 ">
          <div>
            <label className="label">
              <span className="label-text">Recipe name**</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Recipe name*"
              className="w-full input rounded-none  border-none"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-96 input rounded-none  border-none"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Price"
                className=" w-96 input rounded-none  border-none"
              />
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              className="textarea rounded-none w-full  h-40"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div>
            <input
              type="file"
              className="file-input file-input-ghost w-full max-w-xs"
            />
          </div>
          <button className="btn bg-gradient-to-r from-yellow-700  to-yellow-600  text-white btn-xs sm:btn-sm md:btn-md rounded-none mt-8  ">
            Send Message
            <div className="text-2xl"> <ImSpoonKnife /></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
