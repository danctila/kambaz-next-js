"use client";

import Link from "next/link";
import { Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function Assignments() {
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
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdEdit className="me-3 fs-3 text-success" />
                  <div>
                    <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-dark fw-bold text-decoration-none">
                      A1
                    </Link>
                    <div className="text-muted small">
                      <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am |{" "}
                      <strong>Due</strong> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <div>
                  <FaCheckCircle className="text-success me-2" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdEdit className="me-3 fs-3 text-success" />
                  <div>
                    <Link href="/Courses/1234/Assignments/124" className="wd-assignment-link text-dark fw-bold text-decoration-none">
                      A2
                    </Link>
                    <div className="text-muted small">
                      <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am |{" "}
                      <strong>Due</strong> May 20 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <div>
                  <FaCheckCircle className="text-success me-2" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdEdit className="me-3 fs-3 text-success" />
                  <div>
                    <Link href="/Courses/1234/Assignments/125" className="wd-assignment-link text-dark fw-bold text-decoration-none">
                      A3
                    </Link>
                    <div className="text-muted small">
                      <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am |{" "}
                      <strong>Due</strong> May 27 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <div>
                  <FaCheckCircle className="text-success me-2" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
