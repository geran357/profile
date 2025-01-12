// App.tsx
import React from "react";
import ProjectCard from "./ProjectCard";

const App: React.FC = () => {
  // Data untuk kartu
  const projects = [
    {
      title: "Project Name 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis minima saepe recusandae libero.",
      imageSize: "350px",
    },
    {
      title: "Project Name 2",
      description:
        "Explicabo commodi quo itaque! Ipsam! Voluptate, reprehenderit? Nam dolores perspiciatis totam cum fugiat recusandae.",
      imageSize: "350px",
    },
    {
      title: "Project Name 3",
      description:
        "Alias laboriosam, expedita velit repellendus suscipit quasi quod magnam deleniti voluptatem accusamus.",
      imageSize: "350px",
    },
  ];

  return (
    <div className="space-y-6 mt-10">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageSize={project.imageSize}
        />
      ))}
    </div>
  );
};

export default App;
