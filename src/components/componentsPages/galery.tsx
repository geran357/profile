import React, { useState } from "react";
import banner from "../images/arona gfx cc_00000.jpg"; // Import banner
import editing1 from "../images/Screenshot 2024-12-31 181727.png"; // Import image editing
import editing2 from "../images/Screenshot 2025-01-10 085714.png"; // Import image editing
import editing3 from "../images/Screenshot 2025-01-10 085835.png"; // Import image editing
import amv1 from "../video/arima kana.mp4"; // Import video amv1
import amv2 from "../video/nahida chan.mp4"; // Import video amv2
import amv3 from "../video/what a perfect day for crying.mp4"; // Import video amv

const LandingPage: React.FC = () => {
  const [popupContent, setPopupContent] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState<boolean>(false);

  const openPopup = (content: string, video: boolean) => {
    setPopupContent(content);
    setIsVideo(video);
  };

  const closePopup = () => {
    setPopupContent(null);
    setIsVideo(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 font-sans relative">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-blue-600 text-white shadow-lg">
        <h1 className="text-2xl font-bold">Galeri Karya</h1>
      </header>

      {/* Banner Section */}
      <section className="px-8 md:px-16 py-4">
        <div className="w-full rounded-lg shadow-lg overflow-hidden">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Editing Section */}
      <section className="px-8 md:px-16 py-10">
        <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
          Editing
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[editing1, editing2, editing3].map((img, idx) => (
            <div
              key={idx}
              className="h-55 flex items-center justify-center rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => openPopup(img, false)}
            >
              <img
                src={img}
                alt={`Editing ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-8 md:px-16 py-10">
        <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
          Video
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[amv1, amv2, amv3].map((video, idx) => (
            <div
              key={idx}
              className="rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => openPopup(video, true)}
            >
              <video
                src={video}
                className="w-full h-auto rounded-lg"
                controls={false}
                muted
              />
            </div>
          ))}
        </div>
      </section>

      {/* Pop-up */}
      {popupContent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-4 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closePopup}
            >
              ✖
            </button>
            {isVideo ? (
              <video
                src={popupContent}
                controls
                className="w-full rounded-lg"
              />
            ) : (
              <img
                src={popupContent}
                alt="Popup Content"
                className="w-full rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
