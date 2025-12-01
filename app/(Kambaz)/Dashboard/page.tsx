"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../Courses/reducer";
import { RootState } from "../store";
import { Course } from "../types";
import * as client from "../Courses/client";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [course, setCourse] = useState<Partial<Course>>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/course.webp",
    description: "New Description",
  });

  const fetchCourses = useCallback(async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error: unknown) {
      // 401 is expected when user is not signed in
      if (error && typeof error === 'object' && 'response' in error && 
          typeof error.response === 'object' && error.response && 
          'status' in error.response && error.response.status !== 401) {
        console.error(error);
      }
      dispatch(setCourses([]));
    }
  }, [dispatch]);

  const fetchAllCourses = useCallback(async () => {
    try {
      const courses = await client.fetchAllCourses();
      dispatch(setCourses(courses));
    } catch (error: unknown) {
      console.error(error);
      dispatch(setCourses([]));
    }
  }, [dispatch]);

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([ ...courses, newCourse ]));
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    if (!course._id) return;
    await client.updateCourse(course as { _id: string } & Record<string, unknown>);
    dispatch(setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));
  };

  const onEnrollInCourse = async (courseId: string) => {
    if (!currentUser) return;
    await client.enrollIntoCourse(currentUser._id, courseId);
    fetchCourses();
  };

  const onUnenrollFromCourse = async (courseId: string) => {
    if (!currentUser) return;
    await client.unenrollFromCourse(currentUser._id, courseId);
    fetchCourses();
  };

  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return !showAllCourses;
  };

  useEffect(() => {
    if (showAllCourses) {
      fetchAllCourses();
    } else {
      fetchCourses();
    }
  }, [currentUser, showAllCourses, fetchCourses, fetchAllCourses]);

  const displayedCourses = showAllCourses ? courses : courses;

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-enrollments-btn"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show My Courses" : "Enrollments"}
        </button>
        <button
          onClick={onAddNewCourse}
          className="btn btn-primary float-end me-2"
          id="wd-add-new-course-click"
        >
          Add
        </button>
        <button
          onClick={onUpdateCourse}
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "Published Courses"} ({displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course) => (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link
                    href={`/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <CardImg src="/images/course.webp" variant="top" width="100%" height={160} />
                    <CardBody className="card-body">
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </CardTitle>
                      <CardText
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </CardText>
                      <Button variant="primary">Go</Button>
                      {!showAllCourses ? (
                        <>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              onDeleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              onUnenrollFromCourse(course._id);
                            }}
                            className="btn btn-danger float-end me-2"
                            id="wd-unenroll-course-click"
                          >
                            Unenroll
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            onEnrollInCourse(course._id);
                          }}
                          className="btn btn-success float-end"
                          id="wd-enroll-course-click"
                        >
                          Enroll
                        </button>
                      )}
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}
