import Link from "next/link";
import Layout from "../../components/Layout";

export default function AdminHome() {
  return (
    <Layout pageTitle="AdminHome">
      <div>
        <Link href={"/form"}>
          <a>Ajout projet</a>
        </Link>
      </div>
      <div>
        <Link href={"/projectsListAdmin"}>
          <a>Liste des Projets (droits Admin)</a>
        </Link>
      </div>
    </Layout>
  );
}
