import { FaPhoneAlt } from "react-icons/fa";
const OurLocation = () => {
  return (
    <div className="mx-8 flex gap-4 justify-center py-8">
      <div className=" h-52 w-72 border">
        <div className="bg-orange-300 p-4 text-center">
          <FaPhoneAlt />
        </div>
        <div className="p-6  m-4 bg-base-200 ">
          <div className="">
            <h2 className="card-title uppercase font-bold">phone</h2>
            <p>+0881 38232-3232</p>
          </div>
        </div>
      </div>
      <div className=" h-52 w-72 border">
        <div className="bg-orange-300 p-4 text-center">
          <FaPhoneAlt />
        </div>
        <div className="p-6  m-4 bg-base-200 ">
          <div className="">
            <h2 className="card-title uppercase font-bold">address</h2>
            <p>08323 rd ,Dhaka</p>
          </div>
        </div>
      </div>
      <div className=" h-52 w-72 border">
        <div className="bg-orange-300 p-4 text-center">
          <FaPhoneAlt />
        </div>
        <div className=" p-6  m-4 bg-base-200 ">
          <div className="">
            <h2 className="card-title uppercase font-bold">working hours</h2>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
