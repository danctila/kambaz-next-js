"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Form, Button, Row, Col } from "react-bootstrap";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a: any) => a._id === aid);
  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control type="text" id="wd-name" defaultValue={assignment?.title} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={10}
            id="wd-description"
            defaultValue={assignment?.description}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md={3}>
            <Form.Label htmlFor="wd-points">Points</Form.Label>
            <Form.Control type="number" id="wd-points" defaultValue={assignment?.points} />
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
            <Form.Control type="datetime-local" id="wd-due-date" defaultValue={assignment?.dueDate} className="mb-3" />

            <Row>
              <Col>
                <Form.Label htmlFor="wd-available-from" className="fw-bold">Available from</Form.Label>
                <Form.Control
                  type="datetime-local"
                  id="wd-available-from"
                  defaultValue={assignment?.availableFrom}
                />
              </Col>
              <Col>
                <Form.Label htmlFor="wd-available-until" className="fw-bold">Until</Form.Label>
                <Form.Control
                  type="datetime-local"
                  id="wd-available-until"
                  defaultValue={assignment?.availableUntil}
                />
              </Col>
            </Row>
          </div>
        </Form.Group>

        <hr />
        <div className="d-flex justify-content-end">
          <Link href={`/Courses/${cid}/Assignments`}>
            <Button variant="secondary" className="me-2">Cancel</Button>
          </Link>
          <Link href={`/Courses/${cid}/Assignments`}>
            <Button variant="danger">Save</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
