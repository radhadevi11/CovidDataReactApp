import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default class DateComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  handleDateChange(date) {
    this.props.onChange(date);
  }

  render() {
     return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM-dd-yyyy"
          margin="normal"
          id="date-picker-inline"
          label={this.props.label}
          value={this.props.date}
          onChange={(date) => this.handleDateChange(date)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
  );
  }
}

 
 
