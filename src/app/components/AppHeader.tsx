import Link from "next/link";

function AppHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* TODO: move into modules drop-down menu*/}
          <li>
            <Link href="alphabet">Alphabet</Link>
          </li>
          <li>
            <Link href="vocabulary">Vocabulary</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
