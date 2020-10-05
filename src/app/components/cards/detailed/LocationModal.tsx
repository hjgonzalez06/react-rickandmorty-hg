import React, { Fragment } from 'react';
import { Modal, Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { DetailedLocation } from '../../../../types';
import Style from './modals.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function LocationModal({ location, show, setShow }: DetailedLocation){

    return (

        <>

            <Modal show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false} centered>
                <Modal.Header className={Style.bgHeader}>
                    <Modal.Title className="mx-auto font-weight-bolder">{location.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col className="d-flex flex-column justify-content-center">
                                <ListGroup>
                                    <ListGroup.Item className={`${Style.bgListItem} mt-3 mt-lg-3`}>
                                        Type:
                                    </ListGroup.Item>
                                    <ListGroup.Item className={`${Style.bgListItem} text-center`}>
                                        {location.type}
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup className="mt-3">
                                    <ListGroup.Item className={Style.bgListItem}>
                                        Dimension:
                                    </ListGroup.Item>
                                    <ListGroup.Item className={`${Style.bgListItem} text-center`}>
                                        {location.dimension}
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup className="mt-3">
                                    <ListGroup.Item className={Style.bgListItem}>
                                        Residents:
                                    </ListGroup.Item>
                                    <ListGroup.Item className={`${Style.bgListItem} text-center`}>
                                        {location.residents.length > 0 && location.residents[0].name != null ?
                                            <section className="d-inline-flex overflow-auto">
                                                <Container>
                                                    <Row>
                                                        {location.residents.slice(0,5).map( resident => 
                                                            <Fragment key={resident.id}>
                                                                <Col xs={12} md={6} lg={6} xl={6} className="mb-2">
                                                                    <Card>
                                                                        <Card.Img variant="top" src={resident.image} />
                                                                        <Card.Body>
                                                                            <Card.Title className="text-center">
                                                                                {resident.name}
                                                                            </Card.Title>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                            </Fragment>
                                                        )}
                                                    </Row>
                                                </Container>
                                            </section>
                                            : <span className="text-muted">Oops, there's no residents here</span>
                                        }
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button onClick={() => setShow(false)} className={`${Style.closeButton} w-25
                                                                       d-flex justify-content-center`}>
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    )

}

export default LocationModal;