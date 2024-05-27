import Image from "next/image";
import React from "react";

const SelectTexture = ({
  step,
  setStep,
  selectedRoom,
  selectedColor,
  residence,
  commercial,
  setSelectedColor,
}) => {
  const textures = [
    {
      image: "/images/texture1.png",
      title: "Elegant Series"
    },
    {
      image: "/images/texture2.png",
      title: "3D Patterns"
    }, {
      image: "/images/texture1.png",
      title: "Marble"
    }
    , {
      image: "/images/texture2.png",
      title: "Fabric"
    }
    , {
      image: "/images/texture1.png",
      title: "Pattern"
    }, {
      image: "/images/texture2.png",
      title: "Solid glitters"
    }, {
      image: "/images/texture1.png",
      title: "Wood Grains"
    }]

  const handleTextureSelection = (title) => {
    setSelectedColor(title);
    setStep(step + 1); // This will advance to the next step
  };

  return (
    <>
      <section className="px-12 pt-16 flex justify-center flex-col gap-3 items-center ">
        {/* <Image
          src={"/images/Logo.png"}
          width={500}
          height={500}
          alt="logo"
          className="h-24 w-32 object-cover"
        /> */}
        {/* <h3 className=" text-4xl font-bold text-white ">{selectedRoom}</h3> */}
      </section>
      <section className="flex justify-center h-auto flex-col  md:flex-row gap-5 items-center  flex-wrap px-12 py-8">
        {/* <div className="  h-[45rem] w-[45%]">
          <img
            src={"/images/demotexture.jpg"}
            // width={1000}
            // height={1000}
            className=" min-h-full w-full object-cover rounded-xl"
          />
        </div> */}
        <section className=" w-[50%]  ">
          <h3 className=" text-xl font-bold text-white w-full text-center uppercase">
            Select The Lamination
          </h3>
          <div className="justify-center items-start py-5 grid gap-3 grid-cols-3 flex-wrap w-full">
  {textures.map((item, index) => (
    <div
      key={index}
      onClick={() => handleTextureSelection(item.title)}
      className={`w-full rounded-xl ${selectedColor === item.title ? "bg-black/10" : null
        } relative flex flex-col col-span-1 gap-3 justify-center items-center px-3 py-2 overflow-hidden`}
      style={{ transition: "transform 0.3s" }}
    >
      <img
        src={item.image}
        alt="log"
        className="h-36 w-full rounded-md transform scale-100 hover:scale-110 transition duration-300"
      />
      <h5 className="text-xl font-medium text-white capitalize">
        {item.title}
      </h5>
      {selectedColor === item.title && (
        <div className="absolute top-0 left-0 inset-0 w-full h-full  opacity-50"></div>
      )}
    </div>
  ))}
</div>

        </section>
      </section>
    </>
  );
};

export default SelectTexture;
