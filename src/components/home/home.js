import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends Component {

  componentDidMount(){
    // console.log(this.props.loginStatus);
    if(this.props.loginStatus) {
      this.props.history.push("/dashboard");
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      // <div><button onClick={this.props.login}>User</button></div>
      <div>Home</div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     username: state.username,
//     password: state.password
//   };
// };

// const mapDispachToProps = dispatch => {
//   return {
//     login: () => dispatch({ type: "LOGIN"})
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispachToProps
// )(Home);

Home.propTypes = {
  // getuser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loginStatus: state.loginStatus
});

export default connect(mapStateToProps)(Home);
