import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { Card, Button, Col } from 'react-bootstrap';
import { Locations, LocationsGeneralCard, State } from '../../../../types';
import DetailedCards from '../DetailedCards';
import { DefaultLocation } from '../../../../defaultObjects';
import Style from './cards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function LocationsCards({ locations }: LocationsGeneralCard): JSX.Element{

    let [show, setShow] =  useState(false);
    let [location, setLocation] = useState(DefaultLocation);
    const type = "Location";

    function renderModal() {
        return show ? DetailedCards({type,location,show,setShow}) : null;
    }

    function showModal(location?: Locations){
        setLocation(location!);
        setShow(!show);
    }

    return (
        <>

            {locations.map( (location: Locations) => 
                <Fragment key={location.id}>
                    <Col xs={12} md={6} lg={4} xl={3} className={`mb-4`}>
                        <Card className={Style.card}>
                            <Card.Header className={`text-center font-weight-bolder`}>{location.name}</Card.Header>
                            <Card.Body>
                                <Card.Subtitle className={`text-center`}>
                                    {location.type}
                                </Card.Subtitle>
                                <div className="btn-block d-flex justify-content-center mt-2">
                                    <Button className={Style.show} onClick={() => showModal(location)}>
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
        locations: state.locations.data
    }
}

export default connect(mapStateToProps)(LocationsCards);