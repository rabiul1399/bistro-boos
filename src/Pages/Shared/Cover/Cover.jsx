import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      bgImage={img}
      blur={{ min: -20, max: 20 }}
      bgImageAlt="the menu"
      strength={-100}
      
    >
      <div
        className="hero h-[700px]"
        style={{ height: '500px' }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content py-16 w-4/6 bg-slate-800 bg-opacity-50 text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-3xl font-bold uppercase">{title}</h1>
            <p className=" uppercase">Would You Like to try a dish?</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
