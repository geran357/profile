// ProjectCard.tsx
import React from "react";

// Definisi tipe properti
interface ProjectCardProps {
  title: string; // Judul kartu
  description: string; // Deskripsi kartu
  image: string; // Jalur gambar
}

// Komponen Kartu
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col md:flex-row max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Bagian Teks */}
      <div className="p-8 flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 truncate">
          {title}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed max-h-[150px] overflow-auto">
          {description}
        </p>
      </div>

      {/* Bagian Gambar */}
      <div className="flex items-center justify-center bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-[250px] md:h-[300px]"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
