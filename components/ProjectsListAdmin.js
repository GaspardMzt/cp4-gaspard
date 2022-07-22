import style from "../styles/ProjectCard.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function ProjectsListAdmin() {
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

  const handleDelete = (id) => {
    axios.delete(`/api/projects/${id}`).then(() => fetchProjectsList());
  };

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
            <button
              className={style.button}
              onClick={() => {
                handleDelete(project.id);
              }}
            >
              supprimer
            </button>
            <Link href={`/form/${project.id}`}>
              <button className={style.button}>Editer</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
