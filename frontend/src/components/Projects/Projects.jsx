import React from "react";
import "./Projects.css";
import { Button, Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href="" className="projectCard" target="blank">
        <div>
          <img height={300} src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
        {isAdmin && (
          <Button sx={{ color: "rgba(40, 40, 40, 0.7)" }}>
            <Delete />
          </Button>
        )}
      </a>
    </>
  );
};

const Projects = () => {
  const projects = [1, 2, 3];
  return (
    <div className="projects">
      <Typography variant="h3">
        projects <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
        {projects.map((project, index) => (
          <ProjectCard
            url="https://github.com/zubaer-rahman"
            projectImage="https://economictimes.indiatimes.com/thumb/msid-72948091,width-1200,height-900,resizemode-4,imgsize-95069/star_istock.jpg?from=mdr"
            projectTitle="Simple Title"
            description="this is a simple mkgrlehr htruruj tr jiytkiuyluyloi8pi9piu"
            technologies="MongoDB, React, NodeJS, Express"
          />
        ))}
      </div>
      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
