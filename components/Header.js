import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="ml-4  md:ml-48">
        Header
        <Link href="/">
          <a>Lien vers accueil</a>
        </Link>
      </div>
    </header>
  );
}
