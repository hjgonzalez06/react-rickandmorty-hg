import React, { Fragment } from 'react';
import { Modal, Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { DetailedEpisode } from '../../../../types';
import Style from './modals.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function EpisodeModal({ episode, show, setShow }: DetailedEpisode){

    return (

        <>

            <Modal show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false} centered>
                <Modal.Header className={Style.bgHeader}>
                    <Modal.Title className="mx-auto font-weight-bolder">{episode.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col className="d-flex flex-column justify-content-center">
                                <ListGroup>
                                    <ListGroup.Item className={`${Style.bgListItem} mt-3 mt-lg-3`}>
                                        Release date:
                                    </ListGroup.Item>
                                    <ListGroup.Item className={`${Style.bgListItem} text-center`}>
                                        {episode.air_date}
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup className="mt-3">
                                    <ListGroup.Item className={Style.bgListItem}>
                                        Episode Nº:
                                    </ListGroup.Item>
                                    <ListGroup.Item className={`${Style.bgListItem} text-center`}>
                                        {episode.episode}
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup className="mt-3">
                                    <ListGroup.Item className={Style.bgListItem}>
                                        Characters:
                                    </ListGroup.Item>
                                    <ListGroup.Item className={`${Style.bgListItem} text-center`}>
                                        <section className="d-inline-flex overflow-auto">
                                            <Container>
                                                <Row>
                                                    {episode.characters.slice(0,5).map( character => 
                                                        <Fragment key={character.id}>
                                                            <Col xs={12} md={6} lg={6} xl={6} className="mb-2">
                                                                <Card>
                                                                    <Card.Img variant="top" src={character.image} />
                                                                    <Card.Body>
                                                                        <Card.Title className="text-center">
                                                                            {character.name}
                                                                        </Card.Title>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        </Fragment>
                                                    )}
                                                </Row>
                                            </Container>
                                        </section>
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

export default EpisodeModal;