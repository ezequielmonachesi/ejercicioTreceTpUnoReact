import { Col, Row } from "react-bootstrap";

const CardClima = () => {
    return (
        <>
        <Col md="8" lg="7" className="my-2">
            <h6>Resultados para <b>Capital, Tucumán</b></h6>
        </Col>
        <Col md="8" lg="6">
            <Row>
                <Col xs="1" className="fs-3 fw-bold">17</Col>
                <Col xs="1">c°</Col>
                <Col xs="7">
                    <p className="text-secondary mb-1">Prob. de precipitaciones: 2%</p>
                    <p className="text-secondary mb-1">Humedad: 91%</p>
                    <p className="text-secondary mb-1">Viento: a 8 Km/h</p>
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