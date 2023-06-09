import { Col, Row } from "react-bootstrap";

const CardClima = ({datos}) => {

    return (
        <>
        <Row className="justify-content-center">

        <Col xs="12" className="my-2">
            <h6>Resultados para <b>{datos.name}</b></h6>
        </Col>
        <Col md="8" lg="6">
            <Row className="justify-content-center shadow-sm">
                <Col xs="4" className="fw-bold">{(datos.main.temp-273.15).toFixed(2)} c°</Col>
                <Col xs="5" sm="7">
                    <p className="text-secondary mb-1">Humedad: {datos.main.humidity}%</p>
                    <p className="text-secondary mb-1">Viento: a {datos.wind.speed} Km/h</p>
                </Col>
            </Row>
        </Col>
        </Row>
        </>
    );
};

export default CardClima;