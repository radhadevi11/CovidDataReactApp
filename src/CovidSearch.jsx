import React from 'react';
import CovidSearchForm from './CovidSearchForm';
import CovidSearchResult from './CovidSearchResult';
import getCovidData from './service.js';

export default class CovidSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchResults: null };
    }
    getCovidDetails(fromDate, toDate) { 
        getCovidData(fromDate, toDate)
        .then((covidEntries) => this.setState({ searchResults: covidEntries }));
        
    }
    render() {
        return (<div>
            <CovidSearchForm
                onSubmit={(fromDate, toDate) => this.getCovidDetails(fromDate, toDate)} />
            {
                this.state.searchResults && <CovidSearchResult searchResults={this.state.searchResults} />
            }

        </div>);
    }

}