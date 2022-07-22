const db = require("../lib/prisma");

module.exports.createProject = ({
  title,
  mainPictureUrl,
  description,
  linkGithub,
  linkDeployement,
}) => {
  return db.project.create({
    data: {
      title,
      mainPictureUrl,
      description,
      linkGithub,
      linkDeployement,
    },
  });
};

module.exports.getProjects = () =>
  db.project.findMany({
    orderBy: {
      title: "asc",
    },
  });

module.exports.getOneProject = (id) => {
  return db.project.findUnique({
    where: { id: parseInt(id, 10) },
  });
};

module.exports.deleteOneProject = (id) => {
  return db.project.delete({ where: { id: parseInt(id, 10) } });
};

module.exports.updateProject = async (data) => {
  return await db.project
    .update({
      where: { id: parseInt(data.id, 10) },
      data,
    })
    .catch((_) => false);
};

module.exports.deleteMany = db.project.deleteMany;
