import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
// import { connect } from 'react-thunk';
import Footer from './components/footer/Footer';
import GeneralCards from './components/cards/GeneralCards';

function App(){

    return (

        <>

            <div className="d-flex flex-column min-vh-100">

                <main className="d-inline-flex mt-5 overflow-auto">

                    <Container>
                        <Row>
                            <Route exact path="/" render={() => <GeneralCards type={`Characters`} />} />                        
                        </Row>
                    </Container>

                </main>

                <Footer />

            </div>

        </>

    );

};

export default App;