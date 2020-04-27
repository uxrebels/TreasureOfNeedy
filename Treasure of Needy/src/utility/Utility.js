

const moment = require('moment');


const parseTime = dateTime => {
    const time = moment(dateTime).format('h:mm a');
    const week = moment(dateTime).format('ddd');
    const month = moment(dateTime).format('MM');
    const date = moment(dateTime).format('DD');
    const year = moment(dateTime).format('YYYY');
  
    const currentTime = moment(new Date()).format('DD-MM-YYYY');
    const inputTime = moment(dateTime).format('DD-MM-YYYY');
    return {
      time,
      week,
      month,
      date,
      currentTime,
      inputTime,
      year
    };
  };

  export const parseDueDate = dateTime => {
    const parsedTime = parseTime(dateTime);
    return {
        day: parsedTime.date
          .concat('-')
          .concat(parsedTime.month)
          .concat('-')
          .concat(parsedTime.year)
      };
 
  }

  export const parseTimeFromTimeStamp = (chooseTime) => {
 
    return moment(chooseTime.nativeEvent.timestamp).format('h:mm A');
 
  };