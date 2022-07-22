import Link from "next/link";
import style from "../styles/ProjectCard.module.css";

export default function ProjectCard({
  title,
  // mainPictureUrl,
  // description,
  // linkGithub,
  // linkDeployement,
  id,
}) {
  return (
    <div>
      <Link href={`/projects/${id}`}>
        <div className={style.projectCardContainer}>
          <div className={style.nameContainer}>{title}</div>
        </div>
      </Link>
      {/* <div className={style.hidden}>
        {mainPictureUrl}, {description}, {linkGithub}, {linkDeployement},
      </div> */}
    </div>
  );
}
