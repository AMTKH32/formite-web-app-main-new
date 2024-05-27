import React, { useState } from "react";

const SelectLimination = ({
  step,
  setStep,
  selectedRoom,
  selectedColor,
  setSelectedColor,
}) => {
  const [selectedTexture, setSelectedTexture] = useState(null);

  const handleImageClick = (texture) => {
    setSelectedTexture(texture);
  };

  const texture = [
   
    {
      image: "/images/colors/7010.jpg",
      title: "Elegant Series",
    },
    {
      image: "/images/colors/7014.jpg",
      title: "3D Patterns",
    },
    {
      image: "/images/colors/7015.jpg",
      title: "Marble",
    },
    {
      image: "/images/texture1.png",
      title: "Pattern",
    },
    {
      image: "/images/texture2.png",
      title: "Solid glitters",
    },
    {
      image: "/images/texture1.png",
      title: "Wood Grains",
    },
  ];

  return (
    <div style={{ overflowY: "auto" }}>
      <div className="flex justify-center flex-col md:flex-row gap-5 items-center flex-wrap pb-16 pt-3">
        <div className="h-[46rem] w-[70%] relative pb-16">
          <section className="px-6 pb-4 flex justify-start flex-col gap-3">
            <h3 className="text-2xl font-bold text-white" style={{ textTransform: "capitalize" }}>
              {selectedRoom}
            </h3>
          </section>
          <div
            className="image-container"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundImage: selectedTexture ? `url(${selectedTexture.image})` : "none",
         
              backgroundRepeat:"repeat",
          
            }}
          >
            <img
              src={"/images/new2.png"}
              alt="Room"
              className="h-full w-full rounded-xl object-cover"
              style={{ position: "absolute", zIndex: 1 }}
            />
          </div>
        </div>
        <section className="flex w-[25%] flex-col justify-start pb-16">
          <section className="px-6 pt-4 pb-4 flex justify-start">
            <h3 className="text-2xl font-bold text-white" style={{ textTransform: "capitalize" }}>
              {selectedColor}
            </h3>
          </section>
          <div className="p-2" style={{ overflowY: "auto", maxHeight: "40rem" }}>
            <div className="grid grid-cols-2 gap-y-10">
              {texture.map((item, idx) => (
                <img
                  key={idx}
                  onClick={() => handleImageClick(item)}
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl h-44 w-44 object-cover cursor-pointer"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      {selectedTexture && (
        <section className="px-12 flex justify-end items-center pb-6">
          <button
            onClick={() => setStep(step + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Continue
          </button>
        </section>
      )}
    </div>
  );
};

export default SelectLimination;


function NewSlider1() {
  const data = [
    {
      image: "/images/texture2.png",
    },
    {
      image: "/images/texture1.png",
    },
    {
      image: "/images/texture2.png",
    },
    {
      image: "/images/texture1.png",
    },
  ];

  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="md:flex relative gap-6 items-center  w-[97%]  h-[20rem]">
        {data?.map((item, idx) => (
          <div
            key={idx}
            className={`absolute left-0 right-0 gap-6 top-0 bottom-0  w-full h-auto flex justify-center items-center -z-10 ${
              idx === index
                ? " translate-x-0 transition-all opacity-100  ease-linear duration-[1s]"
                : " translate-x-[100vw] opacity-0"
            }`}
          >
            <Image
              width={1000}
              height={1000}
              alt="image"
              src={item.image}
              className=" w-1/3 h-[80%] object-center bg-center z-10 object-cover"
            />
          </div>
        ))}
        <div className=" absolute left-0 right-0 -bottom-[50%] -z-10   w-full">
          <img src="/images/under.png" className="w-full h-auto" />
        </div>
        <div className=" flex gap-3 absolute left-[20%]  right-[20%]  bottom-0 top-0 justify-between items-center px-8">
          <button
            aria-label="slide backward"
            className="absolute z-30 left-0 p-3 -ml-10  rounded-full cursor-pointer"
            onClick={() => {
              if (index === 0) {
                setIndex(3);
              } else {
                setIndex(index - 1);
              }
            }}
          >
            <FaAngleLeft color="white" size={30} />
          </button>

          <button
            aria-label="slide forward"
            className="absolute z-30 right-0 -mr-10 p-3  rounded-full"
            onClick={() => {
              if (index === 3) {
                setIndex(0);
              } else {
                setIndex(index + 1);
              }
            }}
          >
            <FaAngleRight color="white" size={30} />
          </button>
        </div>
      </div>
    </>
  );
}

function NewSlider2() {
  const data = [
    {
      image1: "/images/texture1.png",
      image2: "/images/texture2.png",
      image3: "/images/texture1.png",
    },
    {
      image1: "/images/texture1.png",
      image2: "/images/texture2.png",
      image3: "/images/texture1.png",
    },
    {
      image1: "/images/texture1.png",
      image2: "/images/texture2.png",
      image3: "/images/texture1.png",
    },
    {
      image1: "/images/texture1.png",
      image2: "/images/texture2.png",
      image3: "/images/texture1.png",
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="md:flex relative items-center w-[97%]  h-[20rem]">
        {data?.map((item, idx) => (
          <div
            key={idx}
            className={`absolute left-0 right-0 gap-6 inset-0 w-full h-auto flex justify-center items-center -z-10 ${
              idx === index
                ? " translate-x-0 transition-all opacity-100  ease-linear duration-[1s]"
                : " translate-x-[100vw] opacity-0"
            }`}
          >
            <Image
              width={1000}
              height={1000}
              alt="image"
              src={item.image1}
              className=" w-1/4 h-[16rem] object-center bg-center object-cover"
            />
            <Image
              width={1000}
              height={1000}
              alt="image"
              src={item.image2}
              className=" w-1/4 h-[16rem] object-center bg-center object-cover"
            />
            <Image
              width={1000}
              height={1000}
              alt="image"
              src={item.image3}
              className=" w-1/4 h-[16rem] object-center bg-center object-cover"
            />
          </div>
        ))}

        <div className=" flex gap-3 absolute  left-0 right-0 bottom-0 top-0 justify-between items-center px-8">
          <button
            aria-label="slide backward"
            className="z-30 p-3  rounded-full cursor-pointer"
            onClick={() => {
              if (index === 0) {
                setIndex(3);
              } else {
                setIndex(index - 1);
              }
            }}
          >
            <FaAngleLeft color="white" size={30} />
          </button>

          <button
            aria-label="slide forward"
            className="z-30 p-3  rounded-full"
            onClick={() => {
              if (index === 3) {
                setIndex(0);
              } else {
                setIndex(index + 1);
              }
            }}
          >
            <FaAngleRight color="white" size={30} />
          </button>
        </div>
      </div>
    </>
  );
}
