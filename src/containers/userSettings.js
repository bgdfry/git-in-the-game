import { connect } from 'react-redux';
import { setStartDate } from '../actions/index';

const mapStateToProps = (state) => {
  return { modStartDates: state.modStartDates };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStartDate: (mod, date) => {
       dispatch(setStartDate(mod, date));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
