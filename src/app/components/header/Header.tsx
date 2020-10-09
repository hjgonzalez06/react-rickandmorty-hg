import React from 'react';
import { Navbar } from 'react-bootstrap';
import Brand from './Brand';
import Searcher from './Searcher';
import Navigation from './Navigation';
import Style from './header.module.css';

function Header() {

    return (

        <>

            <Navbar className={`${Style.navbar} d-inline-flex`} expand="lg">

                <Brand />

                <Searcher />

            </Navbar>

            <Navigation />

        </>

    )

};

export default Header;