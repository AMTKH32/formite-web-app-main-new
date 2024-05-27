import Image from "next/image";
import React from "react";

const SelectRoom = ({
  step,
  setStep,
  residence,
  commercial,
  selectedRoom,
  setSelectedRoom,
}) => {

  const handleRoomSelection = (title) => {
    setSelectedRoom(title);
    setStep(step + 1); // This will advance to the next step
  };

  return (
    <>
      <section className="px-12 pt-16 flex justify-center items-center">
        <Image
          src={"/images/Logo.png"}
          width={500}
          height={500}
          alt="logo"
          className="h-24 w-44 object-cover"
        />
      </section>
      <main className="flex gap-5 justify-center items-start px-12 py-8">
        <section className=" w-1/2">
          <section className="flex justify-center flex-col md:flex-row gap-5 items-center flex-wrap">
            <div className={`relative w-full`}>
              <Image
                src={"/images/1.png"}
                width={1000}
                height={1000}
                alt="demo"
                className="w-full h-56  object-cover rounded-md"
                onClick={() => handleRoomSelection("Residence")} 
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 text-white text-center">
                <h2 className="text-3xl uppercase font-medium">Residence</h2>
              </div>
            </div>
          </section>
          <section className="flex justify-center flex-col md:flex-row gap-5 items-center flex-wrap py-8">
            {residence.map((item, index) => (
              <div
                onClick={() => handleRoomSelection(item.title)} 
                key={index}
                className={`w-full md:w-[30%] ${
                  selectedRoom === item.title ? " scale-90 h-auto" : null
                }  h-full relative`}
              >
                <Image
                  src={item.image}
                  width={1000}
                  height={1000}
                  alt="demo"
                  className="w-full  h-full rounded-md"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 text-white text-center">
                  <h2 className="text-xl cursor-pointer">{item.title}</h2>
                </div>
              </div>
            ))}
          </section>
        </section>
        <section className=" w-1/2">
          <section className="flex justify-center flex-col md:flex-row gap-5 items-center flex-wrap ">
            <div className={`w-full h-full relative`}>
              <Image
                src={"/images/2.png"}
                width={1000}
                height={1000}
                alt="demo"
                className="w-full  h-56 object-cover  rounded-md"
                onClick={() => handleRoomSelection("Commercial")} 
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 text-white text-center">
                <h2 className="text-3xl uppercase font-medium">Commercial</h2>
              </div>
            </div>
          </section>
          <section className="flex justify-center flex-col md:flex-row gap-5 items-center flex-wrap py-8">
            {commercial.map((item, index) => (
              <div
                onClick={() => handleRoomSelection(item.title)} 
                key={index}
                className={`w-full md:w-[30%] ${
                  selectedRoom === item.title ? " scale-90 h-auto" : null
                }  h-full relative`}
              >
                <Image
                  src={item.image}
                  width={1000}
                  height={1000}
                  alt="demo"
                  className="w-full  h-full object-cover  rounded-md  "
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 text-white text-center">
                  <h2 className="text-xl cursor-pointer">{item.title}</h2>
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>
    </>
  );
};

export default SelectRoom;
