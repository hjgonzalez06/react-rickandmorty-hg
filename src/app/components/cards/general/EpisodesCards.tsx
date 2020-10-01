import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { Card, Button, Col } from 'react-bootstrap';
import { Episodes, EpisodesGeneralCard, State } from '../../../../types';
import Style from './cards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function EpisodesCards({ episodes }: EpisodesGeneralCard): JSX.Element{

    let [show, setShow] =  useState(false);
    /* let [currentEpisode, setCurrentEpisode] = useState(); */

    function showModal(episode?: Episodes){
        /* setCurrentEpisode(episode!); */
        setShow(!show);
    }

    return (
        <>

            {episodes.map( (episode: Episodes) => 
                <Fragment key={episode.id}>
                    <Col xs={12} md={6} lg={4} xl={3} className={`mb-4`}>
                        <Card className={Style.card}>
                            <Card.Header className={`text-center text-bolder`}>{episode.name}</Card.Header>
                            <Card.Body>
                                <Card.Subtitle className={`text-center`}>
                                    {episode.air_date}
                                </Card.Subtitle>
                                <div className="btn-block d-flex justify-content-center mt-2">
                                    <Button className={Style.show} onClick={() => showModal(episode)}>
                                        <FontAwesomeIcon icon={faPlus} />
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
        episodes: state.episodes.data
    }
}

export default connect(mapStateToProps)(EpisodesCards);