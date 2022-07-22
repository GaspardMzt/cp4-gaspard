import base from "../../../middlewares/common";
import { createProject, getProjects } from "../../../models/project";

const handlePost = async (req, res) => {
  const project = await createProject(req.body);
  return res.status(201).send(project);
};

const handleGet = async (req, res) => {
  const projects = await getProjects();
  return res.status(201).send(projects);
};

export default base().post(handlePost).get(handleGet);
