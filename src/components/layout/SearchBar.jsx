import { Container,Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
const SearchBar = () => {
    return (
        <Container className="pt-5">
            <Form className="mb-5 mt-5">
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="fs-6">Title</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="nwc, dbi...." />
                        </Form.Group>

                        <Form.Select size="sm">
                            <option defaultValue={"Small select"}>Small select</option>
                            <option value="tech">Tech</option>
                        </Form.Select>
                        
                        <Button className="mt-3" variant="info">
                            Search
                        </Button>
                    </Col>
                    <Col md={6}>
                       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Lecture</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="nwc, dbi...." />
                        </Form.Group>
                        <Form.Check type="switch" id= "custom-switch" label="radio 1" />
                    </Col>
                </Row>
            </Form>
            <hr/>
        </Container>
    );
}
export default SearchBar;