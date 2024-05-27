"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import SelectRoom from "./SelectRoom";
import SelectTexture from "./SelectTexture";
import SelectLimination from "./SelectLimination";
import FinalSubmission from "./FinalSubmission";
import { AiOutlineUser, AiOutlineCreditCard, AiOutlineFileText, AiOutlineCheck } from 'react-icons/ai';
import { SiMaterialdesignicons } from "react-icons/si";
import { PiCameraFill } from "react-icons/pi";
export default function SelectionModal() {
  let [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  function closeModal() {
    console.log("Hiii");
  }

  function openModal() {
    setIsOpen(true);
  }
  const residence = [
    {
      title: "Living Room",
      image: "/images/3.png",
    },
    {
      title: "TV Room",
      image: "/images/4.png",
    },
    {
      title: "Drawing Room",
      image: "/images/3.png",
    },
    {
      title: "Bed Room",
      image: "/images/4.png",
    },
    {
      title: "Bath Room",
      image: "/images/card4.jpg",
    },
  ];
  const commercial = [
    {
      title: "Reception",
      image: "/images/5.png",
    },
    {
      title: "Conference Room",
      image: "/images/3.png",
    },
    {
      title: "Lunch Room",
      image: "/images/4.png",
    },
  ];
  return <>
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-start ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="min-h-[90vh] w-full bg-no-repeat bg-cover transform overflow-hidden bg-[url('/images/modalbg.png')] z-10 text-left align-middle shadow-xl transition-all">
  <section className="bg-gray-800 w-full px-32 py-8 flex justify-center items-center relative">
    <ol className="flex items-center justify-center w-full mb-4 sm:mb-5">
      <li className={`flex flex-col items-center w-1/4 text-red dark:text-red-600 ${step >= 1 ? 'after:content-[""] after:w-full after:h-2 after:border-b-2 after:border-red-600' : 'after:border-gray-100'} after:inline-block dark:after:border-red-600`}>
        <div style={{ backgroundColor: "white" }} className={`flex items-center justify-center w-10 h-10 bg-${step >= 1 ? 'white' : 'gray'} rounded-full lg:h-12 lg:w-12 bg-${step >= 1 ? 'white' : 'gray'} shrink-0`} onClick={() => setStep(1)}>
          <PiCameraFill className="w-4 h-4 text-red-600 lg:w-6 lg:h-6 dark:text-red-600" />
        </div>
        <span className="mt-2 text-center text-white">Choose Scene</span>
      </li>
      <li className={`flex flex-col items-center w-1/4 ${step >= 2 ? 'after:content-[""] after:w-full after:h-2 after:border-b-2 after:border-red-500' : 'after:border-red-600'} after:inline-block dark:after:border-red-600`}>
        <div style={{ backgroundColor: "white" }} className={`flex items-center justify-center w-10 h-10 bg-${step >= 2 ? 'white' : 'gray'} rounded-full lg:h-12 lg:w-12 bg-${step >= 2 ? 'white' : 'gray'} shrink-0`} onClick={() => selectedRoom && setStep(2)}>
          <SiMaterialdesignicons  className="w-4 h-4 text-red-600 lg:w-6 lg:h-6 dark:text-red-600" />
        </div>
        <span className="mt-2 text-center text-white">Choose Lamination</span>
      </li>
      <li className={`flex flex-col items-center w-1/4 ${step >= 3 ? 'after:content-[""] after:w-full after:h-2 after:border-b-2 after:border-red-500' : 'after:border-red-600'} after:inline-block dark:after:border-red-600`}>
        <div style={{ backgroundColor: "white" }} className={`flex items-center justify-center w-10 h-10 bg-${step >= 3 ? 'white' : 'gray'} rounded-full lg:h-12 lg:w-12 bg-${step >= 3 ? 'white' : 'gray'} shrink-0`} onClick={() => selectedColor && setStep(3)}>
          <AiOutlineFileText className="w-4 h-4 text-red-600 lg:w-6 lg:h-6 dark:text-red-600" />
        </div>
        <span className="mt-2 text-center text-white">Choose Texture</span>
      </li>
      <li className={`flex flex-col items-center w-1/4 ${step >= 4 ? 'after:content-[""] after:w-full after:h-2 after:border-b-2 after:border-red-500' : 'after:border-red-600'} after:inline-block dark:after:border-red-600`}>
        <div style={{ backgroundColor: "white" }} className={`flex items-center justify-center w-10 h-10 bg-${step >= 4 ? 'white' : 'gray'} rounded-full lg:h-12 lg:w-12 bg-${step >= 4 ? 'white' : 'gray'} shrink-0`} onClick={() => selectedColor && selectedRoom && setStep(4)}>
          <AiOutlineCheck className="w-4 h-4 text-red-600 lg:w-6 lg:h-6 dark:text-red-600" />
        </div>
        <span className="mt-2 text-center text-white">Save</span>
      </li>
    </ol>
  </section>
  {step === 1 && (
    <SelectRoom
      step={step}
      residence={residence}
      commercial={commercial}
      setStep={setStep}
      selectedRoom={selectedRoom}
      setSelectedRoom={setSelectedRoom}
    />
  )}
  {step === 2 && (
    <SelectTexture
      step={step}
      residence={residence}
      commercial={commercial}
      setStep={setStep}
      selectedColor={selectedColor}
      selectedRoom={selectedRoom}
      setSelectedColor={setSelectedColor}
    />
  )}
  {step === 3 && (
    <SelectLimination
      step={step}
      residence={residence}
      commercial={commercial}
      setStep={setStep}
      selectedColor={selectedColor}
      selectedRoom={selectedRoom}
      setSelectedColor={setSelectedColor}
    />
  )}
  {step === 4 && <FinalSubmission />}
</Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
</>

}
