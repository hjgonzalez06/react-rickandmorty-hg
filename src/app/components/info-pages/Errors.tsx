import React, { MouseEventHandler } from 'react';
import { Col, Button } from 'react-bootstrap';
import { ErrorsProp } from '../../../types';
import Style from './info-pages.module.css';

function Errors( { message }: ErrorsProp ){

    const reloadApp = () => {

        window.location.reload(false);

    }

    const showErrorMessage = (): JSX.Element => {

        if (message === "Failed to fetch") {
            return (

                <>
                    <h4 className="font-weight-lighter">
                        Oops! Looks like you have problems with your connection.
                    </h4>
                </>

            )
        };

        return (

            <>
                <h4 className="font-weight-lighter">
                    Oops! Looks like there's no coincidences.
                </h4>
            </>

        )

    };

    return (

        <>

            <Col>
                <div className="text-center">
                    {showErrorMessage()}
                    <hr />
                    <Button className={Style.tryAgainButton} onClick={reloadApp as unknown as MouseEventHandler}>
                        Try again!
                    </Button>
                </div>
            </Col>

        </>

    )

};

export default Errors;