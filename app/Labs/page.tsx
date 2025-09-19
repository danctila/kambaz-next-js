import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h3>Dylan Anctil - Fridays @ 3:00pm EST Async Section</h3>
      <h3>
        GitHub Repository:{" "}
        <a href="https://github.com/danctila/kambaz-next-js" id="wd-github">
          https://github.com/danctila/kambaz-next-js
        </a>
      </h3>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
      </ul>
    </div>
  );
}
