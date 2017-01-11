import { connect } from 'react-redux';
import { getEvents, } from '../actions/index';

const mapStateToProps = (state) => {
 const { events } = state
 return {
   events: events
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
   getEvents: (events) => {
      dispatch(getEvents(events));
    },
    getWeeklyCommitArrays: (events) => {
      dispatch(getWeeklyCommitArrays(events));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
