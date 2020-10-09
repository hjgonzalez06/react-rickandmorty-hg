import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Col, InputGroup,
         FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { SearcherProps, State } from '../../../types';
import {searchCharactersAction as searchCharacters} from '../../redux/ducks/charactersDuck';
import {searchLocationsAction as searchLocations} from '../../redux/ducks/locationsDuck';
import {searchEpisodesAction as searchEpisodes} from '../../redux/ducks/episodesDuck';
import Style from './header.module.css';

function Searcher({ location, searchCharacters, searchLocations, searchEpisodes }: SearcherProps): JSX.Element {

    const NAME = "Name";
    const TYPE = "Type";
    const EPISODE = "Episode";
    let [wordToSearch, setWordToSearch] = useState<string>("");
    let [filter, setFilter] = useState<string>(NAME);
    const rgxLettersAndSpaces = /^[a-zA-Z][a-zA-Z0-9]*(?: [a-Az-Z0-9]+)?$/;
    const rgxEmpty = /^$/;

    let validateInput = (value: string): boolean => value.length >=3 && rgxLettersAndSpaces.test(value);

    let validateEmpty = (wordToSearch: string): void => {

        if (wordToSearch.length === 1 && rgxEmpty.test(wordToSearch)) {

            reset();

        }

    }

    let getWords = ({target}: React.ChangeEvent<HTMLInputElement>) => {

        setWordToSearch(target.value);
        searchAction(target.value);
        validateEmpty(target.value);

    }

    let searchAction = (wordToSearch: string): void => {
        if (validateInput(wordToSearch)) {
            switch(location){
                case "Characters":
                    searchCharacters(wordToSearch, filter);
                    break;
                case "Locations":
                    searchLocations(wordToSearch, filter);
                    break;
                case "Episodes":
                    searchEpisodes(wordToSearch, filter);
                    break;
            }
        }
    }

    let reset = (): void => {

        setWordToSearch("");
        window.location.reload();

    }

    let renderFilters = (): JSX.Element => {

        switch(location) {
            case "Episodes":
                return (
                    <>
                        <Dropdown.Item href="#" className={ filter === NAME ? "active" : "" }>
                            Name
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#" onClick={() => setFilter(EPISODE)}
                                       className={ filter === EPISODE ? "active" : "" }>
                            Episode
                        </Dropdown.Item>
                    </>
                )
            default:
                return (
                    <>
                        <Dropdown.Item href="#" className={ filter === NAME ? "active" : "" }>
                            Name
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#" onClick={() => setFilter(TYPE)}
                                       className={ filter === TYPE ? "active" : "" }>
                            Type
                        </Dropdown.Item>
                    </>
                )
        }

    };

    return (

        <>

            <Col xs={12} md={12} lg={6} xl={6} className="my-2">
                <InputGroup className="float-right">
                    <FormControl
                        placeholder="Search..."
                        aria-label="Search..."
                        aria-describedby="basic-addon2"
                        onChange={getWords}
                        value={wordToSearch}
                    />
                    <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Filters"
                        id="input-group-dropdown-2"
                        alignRight
                    >
                        {renderFilters()}
                    </DropdownButton>
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={() => reset()}>
                            Reset
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>

        </>

    )

};

function mapStateToProps(state: State) {

    return {
        location: state.page.current
    }

}

export default connect(mapStateToProps, { searchCharacters, searchLocations, searchEpisodes })(Searcher);