import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import style from "../styles/AddProjectForm.module.css";

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [mainPictureUrl, setMainPictureUrl] = useState("");
  const [description, setDescription] = useState("");
  const [linkGithub, setLinkGithub] = useState("");
  const [linkDeployement, setLinkDeployement] = useState("");

  const router = useRouter();

  const handleCreateProject = (e) => {
    e.preventDefault();
    axios
      .post(`/api/projects`, {
        title,
        mainPictureUrl,
        description,
        linkGithub,
        linkDeployement,
      })
      .then(() => router.push("/projectsListAdmin"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form className={style.formContainer} onSubmit={handleCreateProject}>
      <label htmlFor="title" className={style.labelForm}>
        Titre projet :
      </label>
      <input
        type="text"
        id="title"
        className={style.inputForm}
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="mainPictureUrl" className={style.labelForm}>
        URL de l&rsquo;image du projet :
      </label>
      <input
        type="text"
        id="mainPictureUrl"
        className={style.inputForm}
        required
        value={mainPictureUrl}
        onChange={(e) => setMainPictureUrl(e.target.value)}
      />

      <label htmlFor="description" className={style.labelForm}>
        Description :
      </label>
      <textarea
        type="text"
        id="description"
        className={style.textareaForm}
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="linkGithub" className={style.labelForm}>
        Lien Github :
      </label>
      <input
        type="text"
        id="linkGithub"
        className={style.inputForm}
        required
        value={linkGithub}
        onChange={(e) => setLinkGithub(e.target.value)}
      />

      <label htmlFor="linkDeployement" className={style.labelForm}>
        Lien déploiement :
      </label>
      <input
        type="text"
        id="linkDeployement"
        className={style.inputForm}
        required
        value={linkDeployement}
        onChange={(e) => setLinkDeployement(e.target.value)}
      />

      <button className={style.buttonValidate}>Valider</button>
    </form>
  );
}
