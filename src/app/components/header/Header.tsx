import React from 'react';
import { Navbar, NavbarBrand, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Style from './header.module.css';
import Logo from '../../visuals/logo.svg';
import Texto from '../../visuals/text.png';

function Header(){

    return (

        <>

            <Navbar className={`${Style.navbar}`}>

                    <Col xs={12} md={12} lg={6} xl={6}>
                        <NavbarBrand>
                            <img src={Logo} width={60} height={60} alt="Logo"/>
                            <div className="ml-2">
                                <img src={Texto} width={180} height={60} alt="Nombre"/>
                                <span className="ml-1 mr-1">
                                    |
                                </span>
                                <span>
                                    Wiki
                                </span>
                            </div>
                        </NavbarBrand>
                    </Col>

            </Navbar>

        </>

    )

}

export default Header;