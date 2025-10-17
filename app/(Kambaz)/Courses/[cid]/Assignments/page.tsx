"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import * as db from "../../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="position-relative" style={{ width: "300px" }}>
          <FaSearch className="position-absolute" style={{ left: "10px", top: "12px" }} />
          <Form.Control
            type="text"
            placeholder="Search..."
            id="wd-search-assignment"
            className="ps-5"
          />
        </div>
        <div>
          <Button variant="secondary" className="me-2" id="wd-add-assignment-group">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <div>
              <span className="me-3">40% of Total</span>
              <BsPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ListGroup className="rounded-0">
            {assignments
              .filter((assignment) => assignment.course === cid)
              .map((assignment) => (
                <ListGroupItem key={assignment._id} className="wd-lesson p-3 ps-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <Link href={`/Courses/${cid}/Assignments/${assignment._id}`}>
                        <MdEdit className="me-3 fs-3 text-success" style={{ cursor: "pointer" }} />
                      </Link>
                      <div>
                        <Link 
                          href={`/Courses/${cid}/Assignments/${assignment._id}`} 
                          className="wd-assignment-link text-dark fw-bold text-decoration-none"
                        >
                          {assignment.title}
                        </Link>
                        <div className="text-muted small">
                          <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong>{" "}
                          {new Date(assignment.availableFrom).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}{" "}
                          at{" "}
                          {new Date(assignment.availableFrom).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })}{" "}
                          | <strong>Due</strong>{" "}
                          {new Date(assignment.dueDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}{" "}
                          at{" "}
                          {new Date(assignment.dueDate).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })}{" "}
                          | {assignment.points} pts
                        </div>
                      </div>
                    </div>
                    <div>
                      <FaCheckCircle className="text-success me-2" />
                      <IoEllipsisVertical className="fs-4" />
                    </div>
                  </div>
                </ListGroupItem>
              ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
