import { connect } from 'react-redux';
import { loginUser } from '../actions/index';
import { setStartDate } from '../actions/index';

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => {
       dispatch(loginUser(data));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
