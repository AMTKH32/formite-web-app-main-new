import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";

const FinalSubmission = () => {
    const handleDownload = () => {
        const imageUrl = "/images/demolimination.jpg";
        const imageTitle = "demolimination";
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = imageTitle;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <section className="px-12 py-16 flex justify-center items-center flex-col gap-8">
                <div className="h-[40rem] w-[70%]">
                <img src="/images/demolimination.jpg" className="w-full h-full rounded-xl" />

                </div>
                <div className="flex justify-center items-center gap-8">
                    <h3 className="text-white text-2xl">Download and Share</h3>
                    <div className="flex justify-center items-center gap-5">
                        <div className="p-4 rounded-full bg-black" onClick={handleDownload}>
                            <MdDownload size={30} color="white" />
                        </div>
                        <div className="rounded-full bg-transparent">
                            <img src="/images/facebook.png" className="w-16 h-16" />
                        </div>
                        <div className="rounded-full bg-transparent">
                            <img src="/images/instagram.png" className="w-16 h-16" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FinalSubmission;
