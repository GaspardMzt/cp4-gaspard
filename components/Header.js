import style from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.headerContainer}>
      <Link href={"/"}>
        <a className={style.linkHeader}>Gaspard M.</a>
      </Link>
      <Link href={"/skills"}>
        <a className={style.linkHeader}>Skills</a>
      </Link>
      <Link href={"/projects"}>
        <a className={style.linkHeader}>Projets</a>
      </Link>
      <Link href={"/contact"}>
        <a className={style.linkHeader}>Contact</a>
      </Link>
    </header>
  );
}
