import { connect } from 'react-redux';
import { submitUserName } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    username: state.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUserName: (username) => {
      dispatch(submitUserName(username));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
