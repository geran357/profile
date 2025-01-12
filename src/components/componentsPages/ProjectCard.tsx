import React from "react";

// Definisi tipe properti (opsional, jika menggunakan TypeScript)
interface ProjectCardProps {
  title: string; // Judul kartu
  description: string; // Deskripsi kartu
  imageSize: string; // Ukuran gambar (contoh: "350px")
}

// Komponen Kartu
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSize }) => {
  return (
    <div className="flex flex-col md:flex-row max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Bagian Teks */}
      <div className="p-8 flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
      </div>

      {/* Bagian Gambar */}
      <div
        className={`w-[250px] h-[${imageSize}] bg-gray-800 flex items-center justify-center text-gray-500 text-sm`}
      >
        {imageSize}
      </div>
    </div>
  );
};

export default ProjectCard;
