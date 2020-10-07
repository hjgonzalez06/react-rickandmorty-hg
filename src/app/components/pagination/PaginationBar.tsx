import React from 'react';
import { connect } from 'react-redux';
import { Pagination, Container, Row } from 'react-bootstrap';
import { PaginationProps } from '../../../types';
import { setPageAction } from '../../redux/ducks/pagesDuck';

function PaginationBar({ location, pages, next, setPageAction  }: PaginationProps): JSX.Element {

    let CURRENT = next - 1;
    let NEXT_ELEMENTS = CURRENT + 3;
    let PREV_ELEMENTS = CURRENT - 2;

    const paginationItems = (): (JSX.Element | null)[] => {

        let itemsArray = Array.from(Array(pages).keys());

        if (CURRENT < 4) {

            return itemsArray.slice(1,6).map( (item) => {

                if (item === 0) return null;

                return (

                    <Pagination.Item key={item} active={item === CURRENT} onClick={() => setPageAction(location, item)}>
                        {item}
                    </Pagination.Item>

                );

            });

        } else {

            return itemsArray.slice(PREV_ELEMENTS,NEXT_ELEMENTS).map( (item) => {

                if (item === 0) return null;

                return (

                    <Pagination.Item key={item} active={item === CURRENT} onClick={() => setPageAction(location, item)}>
                        {item}
                    </Pagination.Item>

                );

            });

        }

    };

    return (

        <>

            <Container>
                <Row className="justify-content-center">
                    <Pagination className="p-3">
                        <Pagination.First onClick={() => setPageAction(location, 1)} />
                        { CURRENT <= 3 ? 
                            <Pagination.Prev disabled />
                            :
                            <Pagination.Prev onClick={() => setPageAction(location, CURRENT - 3)} />
                        }
                        {paginationItems()}
                        { CURRENT >= pages - 3 ? 
                            <Pagination.Next disabled />
                            :
                            <Pagination.Next onClick={() => setPageAction(location, CURRENT + 3)} />
                        }
                        <Pagination.Last onClick={() => setPageAction(location, pages)} />
                    </Pagination>
                </Row>
            </Container>
            
        </>

    )

};

function mapStateToProps(state: any){

    return {
        location: state.page.current.toLowerCase(),
        pages: state[state.page.current.toLowerCase()].pages,
        next: state[state.page.current.toLowerCase()].nextPage
    }

};

export default connect(mapStateToProps, { setPageAction })(PaginationBar);