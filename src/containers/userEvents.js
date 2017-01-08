import { connect } from 'react-redux';
import { getEvents, getPushEvents } from '../actions/index';

const mapStateToProps = (state) => {
 return {
   events: state.events,
   pushEvents: state.pushEvents
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
   getEvents: (events) => {
      dispatch(getEvents(events));
    },
    getPushEvents: (pushEvents) => {
      dispatch(getPushEvents(pushEvents));
    }

 };
};

export default connect(mapStateToProps, mapDispatchToProps);
