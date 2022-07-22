import Layout from "../../components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Project() {
  const router = useRouter();
  const { id } = router.query;

  const [project, setProject] = useState("");

  useEffect(() => {
    axios.get(`/api/projects/${id}`).then((res) => setProject(res.data));
  }, [id]);

  return (
    <Layout pageTitle={project.title}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.mainPictureUrl}</p>
      <a>{project.linkGithub}</a>
      <a>{project.linkDeployement}</a>
    </Layout>
  );
}
