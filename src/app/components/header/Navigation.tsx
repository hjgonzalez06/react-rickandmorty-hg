import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav, Button } from 'react-bootstrap';
import { setLocationAction } from '../../redux/ducks/pagesDuck';
import {  NavButtons, State } from '../../../types';
import Style from './header.module.css';

function Navigation({ location, setLocationAction }: NavButtons) {

    const CHARACTERS = "Characters";
    const LOCATIONS = "Locations";
    const EPISODES = "Episodes";

    return (

        <>

            <Nav className={`${Style.buttonsRow} mt-0 p-2 d-inline-flex justify-content-center w-100`}>
                
                <Link to="/" className="mx-2 mx-md-5 text-decoration-none">
                    <Button className={location === CHARACTERS ? `${Style.active}` : `${Style.options}`}
                            onClick={() => setLocationAction!(CHARACTERS)}>
                        Characters
                    </Button>
                </Link>
                <Link to="/locations" className="mx-2 mx-md-5 text-decoration-none">
                    <Button className={location === LOCATIONS ? `${Style.active}` : `${Style.options}`}
                            onClick={() => setLocationAction!(LOCATIONS)}>
                        Locations
                    </Button>
                </Link>
                <Link to="/episodes" className="mx-2 mx-md-5 text-decoration-none">
                    <Button className={location === EPISODES ? `${Style.active}` : `${Style.options}`}
                            onClick={() => setLocationAction!(EPISODES)}>
                        Episodes
                    </Button>
                </Link>

            </Nav>

        </>

    )

};

let mapStateToProps = (state: State) => {

    return {
        location: state.page.current
    };

};

export default connect(mapStateToProps, { setLocationAction })(Navigation);