import React from 'react';

export default class CovidSearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {fromDate : null, toDate : null};

    }
    fromDateHandleChange(event) {
        this.setState({fromDate: event.target.value});
    }
    toDateHandleChange(event) {
        this.setState({toDate: event.target.value});
    }
    handleSubmit() {
       this.props.onSubmit(this.state.fromDate, this.state.toDate);
    }
    render() {
        return(<div>
                From Date :
                <input type = "text" id = "fromDate" value = {this.state.value} 
                onChange = {(event) => this.fromDateHandleChange(event)}>
                    </input><br/>
                To Date :
                <input type = "text" id = "toDate" value = {this.state.value} 
                onChange = {(event) => this.toDateHandleChange(event)}>
                    </input><br/>
                <button type = "submit" onClick = {() => this.handleSubmit()}>
                    Get Covid Details</button>
            </div>)
    }
   
}