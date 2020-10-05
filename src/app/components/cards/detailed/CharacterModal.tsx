import React from 'react';
import { Modal, Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import { DetailedCharacter } from '../../../../types';
import Style from './modals.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function CharacterModal({ character, show, setShow }: DetailedCharacter){

    return (

        <>

            <Modal show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false} centered>
                <Modal.Header className={Style.bgHeader}>
                    <Modal.Title className="mx-auto font-weight-bolder">{character.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={12} md={12} lg={6} xl={6} className="d-flex justify-content-center">
                                <Image src={character.image} fluid />
                            </Col>
                            <Col xs={12} md={12} lg={6} xl={6} className="d-flex flex-column justify-content-center">
                                <ListGroup>
                                    <ListGroup.Item className={`${Style.bgListItem} mt-3 mt-lg-3`}>
                                        Type:
                                    </ListGroup.Item>
                                    <ListGroup.Item className={`${Style.bgListItem} text-center`}>
                                        {character.type === "" ?
                                            <span className="text-muted">Oops, there's no info</span>
                                            : character.type}
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup className="mt-3">
                                    <ListGroup.Item className={Style.bgListItem}>
                                        Gender:
                                    </ListGroup.Item>
                                    <ListGroup.Item className={`${Style.bgListItem} text-center`}>
                                        {character.gender}
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup className="mt-3">
                                    <ListGroup.Item className={Style.bgListItem}>
                                        Species:
                                    </ListGroup.Item>
                                    <ListGroup.Item className={`${Style.bgListItem} text-center`}>
                                        {character.species}
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

export default CharacterModal;