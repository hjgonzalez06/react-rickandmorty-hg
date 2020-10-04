import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, Col, InputGroup,
    FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setLocationAction } from '../../redux/ducks/pagesDuck';
import {  NavButtons, State } from '../../../types';
import Style from './header.module.css';
import Logo from '../../visuals/logo.svg';
import Texto from '../../visuals/text.png';

function Header({ location, setLocationAction }: NavButtons) {

    const CHARACTERS = "Characters";
    const LOCATIONS = "Locations";
    const EPISODES = "Episodes";

    return (

        <>

            <Navbar className={`${Style.navbar} d-inline-flex`} expand="lg">

                    <Col xs={12} md={12} lg={6} xl={6}>
                        <NavbarBrand className="w-100 d-inline-flex float-left justify-content-xl-start
                                                justify-content-lg-start justify-content-md-center
                                                justify-content-sm-center">
                            <img src={Logo} width={60} height={60} alt="Logo"/>
                            <div className="ml-2">
                                <img src={Texto} width={180} height={60} alt="Nombre"/>
                                <span className={`${Style.ySpaceBar} ml-1 mr-1`}>
                                    |
                                </span>
                                <span className={Style.wiki}>
                                    Wiki
                                </span>
                            </div>
                        </NavbarBrand>
                    </Col>

                    <Col xs={12} md={12} lg={6} xl={6} className="my-2">
                        <InputGroup className="float-right">
                            <FormControl
                                placeholder="Search..."
                                aria-label="Search..."
                                aria-describedby="basic-addon2"
                            />
                            <DropdownButton
                                as={InputGroup.Append}
                                variant="outline-secondary"
                                title="Filters"
                                id="input-group-dropdown-2"
                                alignRight
                            >
                                <Dropdown.Item href="#">Name</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Type</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </Col>

            </Navbar>

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

function mapStateToProps(state: State){

    return {
        location: state.page.current
    }

};

export default connect(mapStateToProps, { setLocationAction })(Header);