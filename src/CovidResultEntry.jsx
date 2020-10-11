import React from 'react';
export default class CovidResultEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.entry.date}</td>
                <td>{this.props.entry.confirmed}</td>
                <td>{this.props.entry.deaths}</td>
                <td>{this.props.entry.recovered}</td>

            </tr>
            
        )
    }
}