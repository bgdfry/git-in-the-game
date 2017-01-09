import moment from 'moment';

const types = {
  USERNAME: 'USERNAME',
  GET_EVENTS: 'GET_EVENTS'
};

export const submitUserName = (inputVal) => {
  return {
    type: types.USERNAME,
    username: inputVal
  };
};

export const setStartDate = (mod, date) => {
  return {
    type: mod,
    data: date
  };
};

export const getEvents = (data) => {
    return {
      type: types.GET_EVENTS,
      data: data
    };
  };

// const calculateCommitsByDay = (pushEvents) => {
//   let arr = [0,0,0,0,0,0,0];
//   pushEvents.map(e => {
//         arr[moment(e[created_at]).isoWeekday() - 1] += e.payload.commits.length;
//         return arr;
//     }
//   });
//   return arr
// }
