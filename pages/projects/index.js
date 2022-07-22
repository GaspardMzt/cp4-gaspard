import style from "../../styles/ProjectsList.module.css";
import Layout from "../../components/Layout";
import ProjectsList from "../../components/ProjectsList";

export default function List() {
  return (
    <Layout pageTitle="Liste des projets">
      <div className={style.ProjectsListContainer}>
        <h1>Liste des projets :</h1>
        <ProjectsList />
      </div>
    </Layout>
  );
}
