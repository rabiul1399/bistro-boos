import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  return (
    <div className="w-auto m-8 bg-base-300 py-8 ">
      <form className="mx-16 text-center">
        <div className="md:flex justify-between">
          <div>
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className=" md:w-96  input rounded-none  border-none"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="md:w-96 input rounded-none  border-none"
            />
          </div>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Phone*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your phone number"
            className=" md:w-full input rounded-none  border-none"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Message*</span>
          </label>
          <textarea
            className="textarea rounded-none md:w-full  md:h-40"
            placeholder="Enter your message here"
          ></textarea>
        </div>

        <button className="btn bg-gradient-to-r from-yellow-700  to-yellow-600  text-white btn-xs sm:btn-sm md:btn-md rounded-none mt-8  ">
          Send Message
          <div className="text-2xl">
            {" "}
            <IoIosSend />
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
