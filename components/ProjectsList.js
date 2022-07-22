import style from "../styles/ProjectCard.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);

  const fetchProjectsList = () => {
    axios
      .get(`/api/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProjectsList();
  }, []);

  return (
    <div className={style.listContainer}>
      {projects.map((project) => {
        return (
          <div key={project.id} className={style.mapCardContainer}>
            <ProjectCard
              title={project.title}
              // mainPictureUrl={project.mainPictureUrl}
              // description={project.description}
              // linkGithub={project.linkGithub}
              // linkDeployement={project.linkDeployement}
              id={project.id}
            />
          </div>
        );
      })}
    </div>
  );
}
