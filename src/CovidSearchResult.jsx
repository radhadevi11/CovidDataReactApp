import React from 'react';
import CovidResultEntry from './CovidResultEntry';

export default class CovidSearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table id="searchResults">
                <tr>
                    <th>Date</th>
                    <th>Total Confirmed Cases</th>
                    <th>Total Deaths</th>
                    <th>Total Recovered Patients</th>
                </tr>
                {
                    this.props.searchResults.map((element, index) => 
                        <CovidResultEntry key = {index} entry = {element}/>)
                }

            </table>
        )
    }
}