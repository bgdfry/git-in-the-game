import { connect } from 'react-redux';
import { loginUser, submitUserName } from '../actions/index';
import NameInput from '../components/NameInput';

const mapStateToProps = (state) => {
  return {
    // auth: state.auth,
    username: state.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // login: (data) => {
    //    dispatch(loginUser(data));
    //  },
    username: (username) => {
      dispatch(submitUserName(username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameInput);
