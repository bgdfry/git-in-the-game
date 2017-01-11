import { connect } from 'react-redux';
import { getEvents, getWeeklyCommitArrays } from '../actions/index';

const mapStateToProps = (state) => {
 const { events, currentWeekCommits } = state
 return {
   events,
   currentWeekCommits
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
