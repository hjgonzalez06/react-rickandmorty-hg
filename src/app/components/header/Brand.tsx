import React from 'react';
import { NavbarBrand, Col } from 'react-bootstrap';
import Style from './header.module.css';
import Logo from '../../visuals/logo.svg';
import Texto from '../../visuals/text.png';

function Brand() {

    return (

        <>

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

        </>

    ) 

};

export default Brand;