// App.tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import image1 from "../projek_image/Screenshot 2024-11-30 212202.png";
import image2 from "../projek_image/Screenshot 2024-12-31 181727.png";
import image3 from "../projek_image/Screenshot 2025-01-10 085714.png";

const App: React.FC = () => {
  // Data untuk kartu proyek
  const projects = [
    {
      title: "Project pertama saya",
      description:
        "Projek pertama saya adalah membuat aplikasi si kos, pada fitur ini admin dapat melihat, memantau perkembangan kos nya.",
      image: image1, // Properti gambar untuk project pertama
    },
    {
      title: "projek editing",
      description:
        "memiliki hobi mengedit video di Adobe After Effects. Saya menikmati proses menciptakan kesan visual yang menarik dan dinamis melalui penggunaan efek, animasi, dan teknik editing lainnya. Mengedit video menjadi bentuk seni yang memungkinkan saya untuk mengekspresikan kreativitas dan meningkatkan kemampuan saya.",
      image: image2, // Properti gambar untuk project kedua
    },
    {
      title: "projek editing",
      description:
        "Mengedit video di Adobe After Effects adalah hobi yang saya nikmati. Saya menyukai proses menciptakan cerita melalui visual yang menarik, dengan menggabungkan elemen-elemen seperti efek, animasi, dan suara. Saya senang bereksperimen dengan teknik editing yang berbeda untuk menciptakan hasil yang unik dan profesional. Dengan After Effects, saya dapat mengekspresikan kreativitas dan meningkatkan kemampuan saya dalam menghasilkan konten video yang berkualitas tingg",
      image: image3, // Properti gambar untuk project ketiga
    },
  ];

  return (
    <div className="space-y-6 mt-10">
      {/* Menambahkan teks "Project" dengan gradient dan membuatnya tebal */}
      <div className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent py-4 mb-8">
        Project
      </div>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image} // Kirim gambar ke ProjectCard
        />
      ))}
    </div>
  );
};

export default App;
