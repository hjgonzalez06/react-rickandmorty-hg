import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
// import { connect } from 'react-thunk';
import Footer from './components/footer/Footer';
import GeneralCards from './components/cards/GeneralCards';
import Header from './components/header/Header';

function App(){

    return (

        <>

            <div className="d-flex flex-column min-vh-100">

                <Header />

                <main className="d-inline-flex mt-5 overflow-auto">

                    <Container>
                        <Row>
                            <Route exact path="/" render={() => <GeneralCards type={`Characters`} />} />
                            <Route exact path="/locations" render={() => <GeneralCards type={`Locations`} />} />
                            <Route exact path="/episodes" render={() => <GeneralCards type={`Episodes`} />} />
                        </Row>
                    </Container>

                </main>

                <Footer />

            </div>

        </>

    );

};

export default App;