import { connect } from 'react-redux';
import {
        getEvents,
        getPushEvents,
        getOpenedPullRequests,
      } from '../actions/index';

const mapStateToProps = (state) => {
 return {
   events: state.events,
   pushEvents: state.pushEvents,
   openedPullRequests: state.openedPullRequests,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
   getEvents: (events) => {
      dispatch(getEvents(events));
    },
    getPushEvents: (pushEvents) => {
      dispatch(getPushEvents(pushEvents));
    },
    getOpenedPullRequests: (openedPullRequests) => {
      dispatch(getOpenedPullRequests(openedPullRequests));
    }

 };
};

export default connect(mapStateToProps, mapDispatchToProps);
