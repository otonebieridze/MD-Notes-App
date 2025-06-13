import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";

export default function NoteForm() {
  return (
    <Form className="mt-4">
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableSelect isMulti />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control required as="textarea" rows={12} />
        </Form.Group>

        <Stack direction="horizontal" className="justify-content-end" gap={2}>
          <Button type="submit" variant="primary">
            Save
          </Button>

          <Button type="button" variant="outline-secondary">
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
}
