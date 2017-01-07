+import { connect } from 'react-redux';
 +import { getEvents } from '../actions/index';
 +
 +const mapStateToProps = (state) => {
 +  return {
 +    events: state.events
 +  };
 +};
 +
 +const mapDispatchToProps = (dispatch) => {
 +  return {
 +    getEvents: (events) => {
 +       dispatch(getEvents(events));
 +     }
 +  };
 +};
 +
 +export default connect(mapStateToProps, mapDispatchToProps);
