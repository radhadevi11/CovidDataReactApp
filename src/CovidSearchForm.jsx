import React from 'react';
import DateComponent from './DateComponent';

export default class CovidSearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {fromDate : null, toDate : null};

    }
    handleSubmit() {
        console.log("From date:"+this.state.fromDate+" to date:"+this.state.toDate);
       this.props.onSubmit(this.state.fromDate, this.state.toDate);
    }
    render() {
        return(<div>
            
                <DateComponent 
                onChange= {(date) => this.setState({fromDate : date})} 
                date={this.state.fromDate}
                label="From Date"/>

                <DateComponent 
                onChange= {(date) => this.setState({toDate : date})} 
                date={this.state.toDate}
                label="To Date"
                />
                
                <button type = "submit" onClick = {() => this.handleSubmit()}>
                    Get Covid Details</button>
            </div>)
    }
   
}