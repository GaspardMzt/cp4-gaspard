const db = require("../lib/prisma");

async function seed() {
  await db.project.deleteMany();
  await db.project.create({
    data: {
      title: "P1 bis",
      mainPictureUrl:
        "https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1714&q=80",
      description: "P1 description",
      linkGithub: "https://github.com/JenniferDELEO/Wild-P1-TokyoExpress",
      linkDeployement:
        "https://www.figma.com/file/GZ3jxpkhv3Sy9NogusaZmw/TOKYO-EXPRESS?node-id=28%3A2",
    },
  });
}

seed();

module.exports = seed;
