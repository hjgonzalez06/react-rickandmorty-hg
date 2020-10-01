import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Header from './components/header/Header';
import GeneralCards from './components/cards/GeneralCards';
import Footer from './components/footer/Footer';

function App(){

    return (

        <>

            <div className="d-flex flex-column min-vh-100">

                <Header />

                <main className="d-inline-flex mt-5 overflow-auto">

                    <Container>
                        <Row>
                            <Switch>
                                <Route exact path="/" render={() => <GeneralCards type={`Characters`} />} />
                                <Route exact path="/locations" render={() => <GeneralCards type={`Locations`} />} />
                                <Route exact path="/episodes" render={() => <GeneralCards type={`Episodes`} />} />
                            </Switch>
                        </Row>
                    </Container>

                </main>

                <Footer />

            </div>

        </>

    );

};

export default App;