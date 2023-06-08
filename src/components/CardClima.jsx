import { Col, Row } from "react-bootstrap";

const CardClima = ({datos}) => {
    return (
        <>
        <Col md="8" lg="7" className="my-2">
            <h6>Resultados para <b>{datos.name}</b></h6>
        </Col>
        <Col md="8" lg="6">
            <Row>
                <Col xs="1" className="fs-3 fw-bold">{datos.main.temp-273.15}</Col>
                <Col xs="1">c°</Col>
                <Col xs="7">
                    <p className="text-secondary mb-1">Humedad: {datos.main.humidity}%</p>
                    <p className="text-secondary mb-1">Viento: a {datos.wind.speed} Km/h</p>
                </Col>
                <Col xs="3">
                    <h6>Clima</h6>
                    <p className="text-secondary mb-1">Jueves, 09:00</p>
                    <p className="text-secondary">Soleado</p>
                </Col>
            </Row>
        </Col>
        </>
    );
};

export default CardClima;