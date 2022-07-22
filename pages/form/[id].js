import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import style from "../../styles/AddProjectForm.module.css";

export default function UpdateProject() {
  const router = useRouter();
  const { id } = router.query;

  const [project, setProject] = useState("");

  useEffect(() => {
    axios.get(`/api/projects/${id}`).then((res) => setProject(res.data));
  }, [id]);

  const handlePatch = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/projects/${id}`, {
        id: project.id,
        title: project.title,
        mainPictureUrl: project.mainPictureUrl,
        description: project.description,
        linkGithub: project.linkGithub,
        linkDeployement: project.linkDeployement,
      })
      .then(() => router.push("/projectsListAdmin"))
      .catch(console.error);
  };

  return (
    <Layout pageTitle="Edition projet">
      <form className={style.formContainer} onSubmit={handlePatch}>
        <label htmlFor="title" className={style.labelForm}>
          Titre projet :{" "}
        </label>
        <input
          type="text"
          id="title"
          className={style.inputForm}
          required
          value={project.title || ""}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
        />

        <label htmlFor="mainPictureUrl" className={style.labelForm}>
          URL de l&rsquo;image du projet :{" "}
        </label>
        <input
          type="text"
          id="mainPictureUrl"
          className={style.inputForm}
          required
          value={project.mainPictureUrl || ""}
          onChange={(e) =>
            setProject({ ...project, mainPictureUrl: e.target.value })
          }
        />

        <label htmlFor="description" className={style.labelForm}>
          Description :{" "}
        </label>
        <input
          type="text"
          id="description"
          className={style.inputForm}
          required
          value={project.description || ""}
          onChange={(e) =>
            setProject({ ...project, description: e.target.value })
          }
        />

        <label htmlFor="linkGithub" className={style.labelForm}>
          Lien Github :{" "}
        </label>
        <input
          type="text"
          id="linkGithub"
          className={style.inputForm}
          required
          value={project.linkGithub || ""}
          onChange={(e) =>
            setProject({ ...project, linkGithub: e.target.value })
          }
        />

        <label htmlFor="linkDeployement" className={style.labelForm}>
          Lien déploiement :{" "}
        </label>
        <input
          type="text"
          id="linkDeployement"
          className={style.inputForm}
          required
          value={project.linkDeployement || ""}
          onChange={(e) =>
            setProject({ ...project, linkDeployement: e.target.value })
          }
        />

        <button className={style.btnForm}>Valider</button>
      </form>
    </Layout>
  );
}
