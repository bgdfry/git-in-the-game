import { connect } from 'react-redux';
import { setStartDate, submitUserName } from '../actions/index';

const mapStateToProps = (state) => {
  return { modStartDates: state.modStartDates };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUserName: (username) => {
      dispatch(submitUserName(username));
    },

    setStartDate: (mod, date) => {
       dispatch(setStartDate(mod, date));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
