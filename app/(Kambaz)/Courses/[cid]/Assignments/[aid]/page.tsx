"use client";

import { Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control type="text" id="wd-name" defaultValue="A1" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={10}
            id="wd-description"
            defaultValue={`The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kambaz application
• Links to all relevant source code repositories

The Kambaz application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md={3}>
            <Form.Label htmlFor="wd-points">Points</Form.Label>
            <Form.Control type="number" id="wd-points" defaultValue={100} />
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
            <Form.Control type="datetime-local" id="wd-due-date" defaultValue="2024-05-13T23:59" className="mb-3" />

            <Row>
              <Col>
                <Form.Label htmlFor="wd-available-from" className="fw-bold">Available from</Form.Label>
                <Form.Control
                  type="datetime-local"
                  id="wd-available-from"
                  defaultValue="2024-05-06T00:00"
                />
              </Col>
              <Col>
                <Form.Label htmlFor="wd-available-until" className="fw-bold">Until</Form.Label>
                <Form.Control
                  type="datetime-local"
                  id="wd-available-until"
                  defaultValue="2024-05-20T23:59"
                />
              </Col>
            </Row>
          </div>
        </Form.Group>

        <hr />
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
