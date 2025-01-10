// File: LandingPage.tsx
import React, { useState } from "react";
import myimage from "./components/images/download.jpg"; //import image

const LandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  const tabContent: Record<string, string> = {
    "tgl lahir": "Tanggal Lahir: 1 Januari 2000",
    Hobi: "Hobi: Membaca, Menulis, dan Bersepeda",
    jurusan: "Jurusan: Teknik Informatika",
    Skil: "Skil: React, Tailwind CSS, dan TypeScript",
  };

  return (
    <div className="t min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 font-sans relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="bg-repea absolute inset-0 pointer-events-none">
        <div className="w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-30 absolute top-10 left-10"></div>
        <div className="w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-30 absolute top-20 right-20"></div>
        <div className="w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-30 absolute bottom-10 left-1/3"></div>
      </div>

      {/* Header Section */}
      <header className="flex flex-col items-center py-10 relative">
        <h1 className="text-4xl font-bold text-gray-800">Landing Page</h1>
        <p className="text-xl text-gray-600">Fajar Geran Arifin</p>
        <p className="text-lg text-gray-500">237006079</p>
        <button className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600">
          Instagram
        </button>
      </header>

      {/* Information Section */}
      <section className="px-8 md:px-16 relative">
        <div className="flex flex-wrap justify-between gap-4 mb-8">
          <div className="h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Deskripsi Gambar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-3/4 h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Deskripsi Gambar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center bg-gray-800 text-white py-4 rounded-lg">
          {["tgl lahir", "Hobi", "jurusan", "Skil"].map((tab) => (
            <button
              key={tab}
              className={`py-4 px-2 m-3 ${
                activeTab === tab ? "bg-purple-500" : "bg-gray-700"
              } rounded-lg hover:bg-purple-600 text-sm`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-800">{tabContent[activeTab]}</p>
          </div>
        )}
      </section>

      {/* Education Section */}
      <section className="px-8 md:px-16 py-10 relative">
        <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
          Pendidikan Terakhir
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src={myimage}
              alt="Deskripsi Gambar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Deskripsi Gambar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Editing Section */}
      <section className="px-8 md:px-16 py-10 relative">
        <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
          Editing
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Deskripsi Gambar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Deskripsi Gambar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Deskripsi Gambar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-8 md:px-16 py-10 relative">
        <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
          Galeri Karya
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Deskripsi Gambar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Deskripsi Gambar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Deskripsi Gambar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Deskripsi Gambar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Deskripsi Gambar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src=""
              alt="Deskripsi Gambar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
