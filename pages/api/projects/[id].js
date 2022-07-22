import base from "../../../middlewares/common";

import {
  getOneProject,
  deleteOneProject,
  updateProject,
} from "../../../models/project";

const handleGetOneProject = async (req, res) => {
  const project = await getOneProject(req.query.id);
  return res.status(201).send(project);
};

const handlePatch = async (req, res) => {
  const updatedProject = await updateProject(req.body);
  return res.status(201).send(updatedProject);
};

const handleDeleteProject = async (req, res) => {
  const projectToDelete = await deleteOneProject(req.query.id);
  return res.status(201).send(projectToDelete);
};

export default base()
  .get(handleGetOneProject)
  .patch(handlePatch)
  .delete(handleDeleteProject);
