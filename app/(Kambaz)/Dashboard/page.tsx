"use client";

import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/course.webp"
              width={200}
              height={150}
              alt="React JS Course"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image
              src="/images/course.webp"
              width={200}
              height={150}
              alt="Node.js Course"
            />
            <div>
              <h5> CS2345 Node.js </h5>
              <p className="wd-dashboard-course-title">
                Backend Development with Node.js
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image
              src="/images/course.webp"
              width={200}
              height={150}
              alt="Python Course"
            />
            <div>
              <h5> CS3456 Python </h5>
              <p className="wd-dashboard-course-title">
                Data Science and Machine Learning
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image
              src="/images/course.webp"
              width={200}
              height={150}
              alt="Database Course"
            />
            <div>
              <h5> CS4567 Database Design </h5>
              <p className="wd-dashboard-course-title">
                Relational and NoSQL Databases
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image
              src="/images/course.webp"
              width={200}
              height={150}
              alt="JavaScript Course"
            />
            <div>
              <h5> CS5678 Advanced JavaScript </h5>
              <p className="wd-dashboard-course-title">
                Modern JavaScript and ES6+
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <Image
              src="/images/course.webp"
              width={200}
              height={150}
              alt="CSS Course"
            />
            <div>
              <h5> CS6789 Advanced CSS </h5>
              <p className="wd-dashboard-course-title">
                Modern CSS and Responsive Design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/7890" className="wd-dashboard-course-link">
            <Image
              src="/images/course.webp"
              width={200}
              height={150}
              alt="MongoDB Course"
            />
            <div>
              <h5> CS7890 MongoDB </h5>
              <p className="wd-dashboard-course-title">
                NoSQL Database Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
