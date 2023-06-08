import { Form, Col, Row } from "react-bootstrap";
import CardClima from "./CardClima";

const AdministradorClima = () => {
  return (
    <>
      <Row className="mt-5">
        <Col lg="4">
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="climaPais">
              <Form.Label column sm="5">
                Ingrese el país:
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" placeholder="País." />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="climaCiudad">
              <Form.Label column sm="5">
                Ingrese la ciudad:
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" placeholder="Ciudad." />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center justify-content-md-start">
        <CardClima></CardClima>
      </Row>
    </>
  );
};

export default AdministradorClima;
