import React, { useState, useEffect } from "react";
import { MdDownload } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FinalSubmission = () => {
    const [watermarkedImageUrl, setWatermarkedImageUrl] = useState(null);

    useEffect(() => {
        const addWatermark = () => {
            const image = new Image();
            image.src = "/images/demolimination.jpg";
            image.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                canvas.width = image.width;
                canvas.height = image.height;

                // Draw the image
                ctx.drawImage(image, 0, 0, image.width, image.height);

                // Add watermark text
                ctx.font = "italic 20px Arial";
                ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
                
                // Calculate text size and positioning
                const watermarkText = "Formite";
                const textWidth = ctx.measureText(watermarkText).width;
                const textHeight = 20; // Adjust as needed
                const padding = 30; // Increase padding
                const numColumns = Math.ceil(canvas.width / (textWidth + padding));
                const numRows = Math.ceil(canvas.height / (textHeight + padding));

                // Draw watermark text in a grid with rotation
                for (let i = 0; i < numColumns; i++) {
                    for (let j = 0; j < numRows; j++) {
                        const x = i * (textWidth + padding) + padding / 2;
                        const y = j * (textHeight + padding) + padding / 2;

                        // Rotate text randomly between -15 to 15 degrees
                        const angle = Math.random() * 30 - 15;
                        ctx.save();
                        ctx.translate(x + textWidth / 2, y + textHeight / 2);
                        ctx.rotate(angle * Math.PI / 180);
                        ctx.fillText(watermarkText, -textWidth / 2, -textHeight / 2);
                        ctx.restore();
                    }
                }

                // Convert canvas to base64 URL
                const watermarkedUrl = canvas.toDataURL("image/jpeg");

                setWatermarkedImageUrl(watermarkedUrl);
            };
        };

        addWatermark();
    }, []);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = watermarkedImageUrl;
        link.download = "watermarked_image.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleFacebookShare = () => {
        // Open Facebook sharing dialog with watermarked image
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(watermarkedImageUrl)}`, "_blank");
    };

    const handleInstagramShare = () => {
        // Open Instagram sharing with watermarked image
        window.open(`https://www.instagram.com/?url=${encodeURIComponent(watermarkedImageUrl)}`, "_blank");
    };

    return (
        <section className="px-12 py-16 flex justify-center items-center flex-col gap-8">
            <div className="h-[40rem] w-[70%]">
                {watermarkedImageUrl && (
                    <img src={watermarkedImageUrl} className="w-full h-full rounded-xl" alt="Watermarked Image" />
                )}
            </div>
            <div className="flex justify-center items-center gap-8">
                <h3 className="text-white text-2xl">Download and Share</h3>
                <div className="flex justify-center items-center gap-5">
                    <div className="p-4 rounded-full bg-black" onClick={handleDownload}>
                        <MdDownload size={30} color="white" />
                    </div>
                    <div className="p-4 rounded-full bg-blue-500" onClick={handleFacebookShare}>
                        <FaFacebook size={30} color="white" />
                    </div>
                    <div className="p-4 rounded-full bg-purple-500" onClick={handleInstagramShare}>
                        <FaInstagram size={30} color="white" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalSubmission;
