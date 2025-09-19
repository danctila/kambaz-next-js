"use client";

import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> May 6 at
          12:00am | <br />
          <strong>Due</strong> May 13 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/124"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> May 13 at
          12:00am | <br />
          <strong>Due</strong> May 20 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/125"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> May 20 at
          12:00am | <br />
          <strong>Due</strong> May 27 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/126"
            className="wd-assignment-link"
          >
            A4 - STATE + REDUX
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> May 27 at
          12:00am | <br />
          <strong>Due</strong> June 3 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/127"
            className="wd-assignment-link"
          >
            A5 - NODE + SESSION
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> June 3 at
          12:00am | <br />
          <strong>Due</strong> June 10 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/128"
            className="wd-assignment-link"
          >
            A6 - MONGO + MONGOOSE
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> June 10 at
          12:00am | <br />
          <strong>Due</strong> June 17 at 11:59pm | 100 pts
        </li>
      </ul>
      <h3>
        QUIZZES 10% of Total <button>+</button>
      </h3>
      <ul>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/Q1"
            className="wd-assignment-link"
          >
            Q1 - HTML
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> May 8 at
          12:00am | <br />
          <strong>Due</strong> May 15 at 11:59pm | 25 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/Q2"
            className="wd-assignment-link"
          >
            Q2 - CSS
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> May 15 at
          12:00am | <br />
          <strong>Due</strong> May 22 at 11:59pm | 25 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/Q3"
            className="wd-assignment-link"
          >
            Q3 - JavaScript
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> May 22 at
          12:00am | <br />
          <strong>Due</strong> May 29 at 11:59pm | 25 pts
        </li>
      </ul>
      <h3>
        EXAMS 50% of Total <button>+</button>
      </h3>
      <ul>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/MIDTERM"
            className="wd-assignment-link"
          >
            Midterm Exam
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> May 29 at
          12:00am | <br />
          <strong>Due</strong> June 5 at 11:59pm | 200 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/FINAL"
            className="wd-assignment-link"
          >
            Final Exam
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> June 12 at
          12:00am | <br />
          <strong>Due</strong> June 19 at 11:59pm | 300 pts
        </li>
      </ul>
      <h3>
        PROJECT 0% of Total <button>+</button>
      </h3>
      <ul>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/PROJECT"
            className="wd-assignment-link"
          >
            Final Project
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> June 5 at
          12:00am | <br />
          <strong>Due</strong> June 26 at 11:59pm | 0 pts
        </li>
      </ul>
    </div>
  );
}
