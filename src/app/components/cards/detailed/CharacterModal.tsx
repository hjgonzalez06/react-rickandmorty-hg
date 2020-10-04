import React from 'react';
import { Modal, Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import { DetailedCharacter } from '../../../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function CharacterModal({ character, show, setShow }: DetailedCharacter){

    return (

        <>

            <Modal show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false} centered>
                <Modal.Header>
                    <Modal.Title>{character?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={12} md={12} lg={6} xl={6}>
                                <Image src={character?.image} fluid />
                            </Col>
                            <Col xs={12} md={12} lg={6} xl={6}>
                                <ListGroup>
                                    <ListGroup.Item>
                                        Type:
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        {character.type}
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup className="mt-3">
                                    <ListGroup.Item>
                                        Gender:
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        {character.gender}
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup className="mt-3">
                                    <ListGroup.Item>
                                        Species:
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        {character.species}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShow(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    )

}

export default CharacterModal;