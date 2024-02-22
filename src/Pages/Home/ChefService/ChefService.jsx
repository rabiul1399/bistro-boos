import chefService from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${chefService})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'auto',
      }}
      className=" px-8 py-4 md:p-20 "
    >
      <div className=" w-auto bg-base-200 rounded-lg shadow-lg  p-8 h-auto ">
        <h3 className="text-center text-3xl font-semibold ">Bistro Boss</h3>
        <p className="md:text-center   ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime atque
          amet ex commodi placeat eos, repellat animi quod ipsam natus odit
          corrupti provident, dicta soluta, tenetur facilis nobis. Obcaecati,
          ipsa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          possimus debitis iste maiores pariatur fugiat. Similique consequuntur
          fugit sint eos ducimus et ullam vero pariatur? Hic eos quod corrupti
          temporibus dolorem quas autem voluptatem, ea sed saepe nihil ut
          blanditiis distinctio deleniti velit. Corporis neque aspernatur
          delectus eius nam eligendi.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
