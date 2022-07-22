import style from "../../styles/ProjectsList.module.css";
import Layout from "../../components/Layout";
import ProjectsListAdmin from "../../components/ProjectsListAdmin";
import Link from "next/link";

export default function List() {
  return (
    <Layout pageTitle="Liste des projets (droit admin)">
      <div className={style.ProjectsListContainer}>
        LISTE DES PROJETS (droits admin)
      </div>
      <ProjectsListAdmin />
      <Link href={"/admin"}>
        <a>Retour accueil admin</a>
      </Link>
    </Layout>
  );
}
