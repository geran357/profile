import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Resume</h1>
      <p className="text-gray-700 leading-relaxed">
        Selamat datang di halaman Resume. Anda dapat menambahkan detail pengalaman kerja,
        pendidikan, atau keterampilan Anda di sini.
      </p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Pengalaman Kerja</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Software Developer di Perusahaan A (2020-2023)</li>
          <li>Web Developer di Perusahaan B (2018-2020)</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
