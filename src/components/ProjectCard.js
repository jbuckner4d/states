// src/components/ProjectCard.js
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  padding: 20px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

const ProjectCard = ({ project }) => (
  <Card>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    {project.url && (
      <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">
        View Project
      </ProjectLink>
    )}
  </Card>
);

export default ProjectCard;
