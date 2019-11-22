// import moment from 'moment';
import { DatePicker } from 'antd';
import React, { Component } from 'react'
var moment = require('moment');

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().startOf('day');
}

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

class DateTimePicker extends Component{
  constructor(props){
    super(props)
    this.state={
      value:null
    }
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }


  onChangeDatePicker = (value,dateString) => {
    // this.onChange('value', value);
    this.setState({
      value:value
    })
     this.props.sendDate(dateString)
  }

  render(){
    const dateFormat = 'YYYY/MM/DD';
    const {value} = this.state
    const start_time = this.props.value
    const {placeholder} = this.props
    const start = moment(this.props.value)
    return(
          <DatePicker
            className={this.props.className}
            format="YYYY-MM-DD "
            // disabledDate={disabledDate}
            // showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
            onChange={this.onChangeDatePicker}
            // value={value?value:''}
            disabled={this.props.disabled}
            value={start_time?start:value}
            placeholder={placeholder}
            // showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
          />
      )
  }
}
export default DateTimePicker