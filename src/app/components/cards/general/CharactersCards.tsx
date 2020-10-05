import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { Card, Button, Col } from 'react-bootstrap';
import { Characters, CharactersGeneralCard, State } from '../../../../types';
import DetailedCards from '../DetailedCards';
import { DefaultCharacter } from '../../../../defaultObjects';
import Style from './cards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function CharactersCards({ characters }: CharactersGeneralCard): JSX.Element{

    let [show, setShow] =  useState(false);
    let [character, setCharacter] = useState(DefaultCharacter);
    const type = "Character";

    function renderModal() {
        return show ? DetailedCards({type,character,show,setShow}) : null;
    }

    function showModal(character?: Characters){
        setCharacter(character!);
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
                                <Card.Title className={`text-center font-weight-bolder`}>
                                    {character.name}
                                </Card.Title>
                                <div className="btn-block d-flex justify-content-center">
                                    <Button className={Style.show} onClick={() => showModal(character)}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Fragment>
            )}

            {renderModal()}

        </>
    )

}

function mapStateToProps(state: State){
    return {
        characters: state.characters.data
    }
}

export default connect(mapStateToProps)(CharactersCards);