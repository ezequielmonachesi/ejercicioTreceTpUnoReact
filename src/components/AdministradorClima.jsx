import { Form, Col, Row, Button } from "react-bootstrap";
import CardClima from "./CardClima";
import { useState } from "react";

const AdministradorClima = () => {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [datos, setDatos] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        consultarAPI(ciudad);
    }

    const consultarAPI = async (ciudad) =>{
        try{ const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=7642ec8dbee5fee9e33dd46366f32720`)
        const informacion = await respuesta.json();
        setDatos(informacion);
        } catch (error){
            console.log(error)
        }
    }

  return (
    <>
      <Row className="mt-5">
        <Col lg="4">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="climaPais">
              <Form.Label column sm="5">
                Ingrese el país:
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="text"
                  placeholder="País."
                  onChange={(e) => {
                    setPais(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="climaCiudad">
              <Form.Label column sm="5">
                Ingrese la ciudad:
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="text"
                  placeholder="Ciudad."
                  onChange={(e) => {
                    setCiudad(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            <div className="text-end">
              <Button variant="danger" type="submit">
                Buscar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center justify-content-md-start">
        <CardClima datos={datos}></CardClima>
      </Row>
    </>
  );
};

export default AdministradorClima;
