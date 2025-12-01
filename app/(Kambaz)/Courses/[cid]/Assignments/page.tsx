"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Form, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import * as client from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const [assignments, setAssignments] = useState<any[]>([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      if (cid) {
        const courseAssignments = await client.findAssignmentsForCourse(cid as string);
        setAssignments(courseAssignments);
      }
    };
    fetchAssignments();
  }, [cid]);

  const handleDeleteClick = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    if (assignmentToDelete) {
      await client.deleteAssignment(assignmentToDelete);
      setAssignments(assignments.filter(a => a._id !== assignmentToDelete));
    }
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };
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
          <Button
            variant="danger"
            id="wd-add-assignment"
            onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}
          >
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
            {assignments.map((assignment) => (
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
                          {assignment.availableFrom && new Date(assignment.availableFrom).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}{" "}
                          {assignment.availableFrom && "at"}{" "}
                          {assignment.availableFrom && new Date(assignment.availableFrom).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })}{" "}
                          | <strong>Due</strong>{" "}
                          {assignment.dueDate && new Date(assignment.dueDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}{" "}
                          {assignment.dueDate && "at"}{" "}
                          {assignment.dueDate && new Date(assignment.dueDate).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })}{" "}
                          | {assignment.points} pts
                        </div>
                      </div>
                    </div>
                    <div>
                      <FaTrash
                        className="text-danger me-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDeleteClick(assignment._id)}
                      />
                      <FaCheckCircle className="text-success me-2" />
                      <IoEllipsisVertical className="fs-4" />
                    </div>
                  </div>
                </ListGroupItem>
              ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>

      <Modal show={showDeleteDialog} onHide={() => setShowDeleteDialog(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteDialog(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
