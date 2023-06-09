import { Form, Col, Row, Button } from "react-bootstrap";
import CardClima from "./CardClima";
import { useState } from "react";

const AdministradorClima = () => {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [datos, setDatos] = useState({
    coord: {
      lon: -64.1811,
      lat: -31.4135,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
    base: "stations",
    main: {
      temp: 293.46,
      feels_like: 293.56,
      temp_min: 291.62,
      temp_max: 296.06,
      pressure: 979,
      humidity: 77,
    },
    visibility: 10000,
    wind: {
      speed: 4.12,
      deg: 360,
    },
    clouds: {
      all: 0,
    },
    dt: 1686276444,
    sys: {
      type: 2,
      id: 2036678,
      country: "AR",
      sunrise: 1686222667,
      sunset: 1686259237,
    },
    timezone: -10800,
    id: 3860259,
    name: "Córdoba",
    cod: 200,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    consultarAPI(ciudad);
  };

  const consultarAPI = async (ciudad) => {
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=7642ec8dbee5fee9e33dd46366f32720`
      );
      const informacion = await respuesta.json();
      setDatos(await informacion);
      console.log(informacion.main.humidity);
    } catch (error) {
      console.log(error);
    }
  };

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
      <Row className="justify-content-center mt-5">
        <Col md="8" className="shadow py-3 px-5">
        <CardClima datos={datos}></CardClima>
        </Col>
      </Row>
    </>
  );
};

export default AdministradorClima;
