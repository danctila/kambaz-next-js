"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import { RootState } from "../../../../store";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  
  const existingAssignment = aid !== "new" ? assignments.find((a: any) => a._id === aid) : null;
  
  const [assignment, setAssignment] = useState<any>({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  });

  useEffect(() => {
    if (existingAssignment) {
      setAssignment(existingAssignment);
    }
  }, [existingAssignment]);

  const handleSave = () => {
    if (aid === "new") {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };
  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control
            type="text"
            id="wd-name"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={10}
            id="wd-description"
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md={3}>
            <Form.Label htmlFor="wd-points">Points</Form.Label>
            <Form.Control
              type="number"
              id="wd-points"
              value={assignment.points}
              onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
          <Form.Select id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
          <Form.Select id="wd-display-grade-as">
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
            <option value="LETTER">Letter Grade</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
          <Form.Select id="wd-submission-type" className="mb-3">
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
          </Form.Select>

          <div className="border p-3">
            <Form.Label className="fw-bold">Online Entry Options</Form.Label>
            <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
            <Form.Check type="checkbox" id="wd-website-url" label="Website URL" defaultChecked />
            <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
            <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
            <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-assign-to">Assign</Form.Label>
          <div className="border p-3">
            <Form.Label htmlFor="wd-assign-to" className="fw-bold">Assign to</Form.Label>
            <Form.Control type="text" id="wd-assign-to" defaultValue="Everyone" className="mb-3" />

            <Form.Label htmlFor="wd-due-date" className="fw-bold">Due</Form.Label>
            <Form.Control
              type="datetime-local"
              id="wd-due-date"
              value={assignment.dueDate}
              onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
              className="mb-3"
            />

            <Row>
              <Col>
                <Form.Label htmlFor="wd-available-from" className="fw-bold">Available from</Form.Label>
                <Form.Control
                  type="datetime-local"
                  id="wd-available-from"
                  value={assignment.availableFrom}
                  onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="wd-available-until" className="fw-bold">Until</Form.Label>
                <Form.Control
                  type="datetime-local"
                  id="wd-available-until"
                  value={assignment.availableUntil}
                  onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
                />
              </Col>
            </Row>
          </div>
        </Form.Group>

        <hr />
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
