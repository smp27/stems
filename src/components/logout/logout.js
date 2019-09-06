import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

class Logout extends Component {

  componentDidMount(){
    this.props.dispatch(logout());
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    if(!nextProps.loginStatus) {
      this.props.history.push("/login");
    } else {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>Logout</div>
    );
  }
}

Logout.propTypes = {
  // logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loginStatus: state.loginStatus
});

export default connect(mapStateToProps)(Logout);
