import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { Card, Button, Col } from 'react-bootstrap';
import { Characters, CharactersGeneralCard, State } from '../../../../types';
import Style from './cards.module.css';

function CharactersCards({ characters }: CharactersGeneralCard): JSX.Element{

    let [show, setShow] =  useState(false);
    /* let [currentCharacter, setCurrentCharacter] = useState(); */

    function showModal(character?: Characters){
        /* setCurrentCharacter(character!); */
        setShow(!show);
    }

    return (
        <>

            {characters.map( (character: Characters) => 
                <Fragment key={character.id}>
                    <Col xs={12} md={6} lg={4} xl={3} className={`mb-4`}>
                        <Card className={Style.card}>
                            <Card.Img variant="top" src={character.image} />
                            <Card.Body>
                                <Card.Title className={`text-center`}>
                                    {character.name}
                                </Card.Title>
                                <div className="btn-block d-flex justify-content-center">
                                    <Button className={Style.show} onClick={() => showModal(character)}>
                                        More
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Fragment>
            )}

            

        </>
    )

}

function mapStateToProps(state: State){
    return {
        characters: state.characters.data
    }
}

export default connect(mapStateToProps)(CharactersCards);