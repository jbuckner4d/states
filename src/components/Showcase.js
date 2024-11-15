// src/components/Showcase.js
import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

// src/components/Showcase.js
const projects = [
  {
    name: "Project 1",
    description:
      "A dynamic portfolio showcasing my skills in front-end development, design consistency, and responsive UI creation.",
    url: "https://resume.jbuckner4d.opalstacked.com/projects/cooking_class/",
  },
  {
    name: "Project 2",
    description: "cooking class",
    url: "https://resume.jbuckner4d.opalstacked.com/projects/cooking_class/",
  },
  {
    name: "Project 3",
    description: "intake",
    url: "https://resume.jbuckner4d.opalstacked.com/projects/intake",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => (layout === "grid" ? "row" : "column")};
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const Showcase = () => {
  const [layout, setLayout] = useState("grid");

  const toggleLayout = () => {
    setLayout((prev) => (prev === "grid" ? "list" : "grid"));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={toggleLayout}>
        Switch to {layout === "grid" ? "List" : "Grid"} View
      </button>
      <Container layout={layout}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Container>
    </div>
  );
};

export default Showcase;
