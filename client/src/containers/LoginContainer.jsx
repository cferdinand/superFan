import { connect } from "react-redux";
import validateUser from "../actions/validateUser.js";
import Login from "../components/Login.jsx";

const mapStateToProps = store => ({
  loggedIn: store.loggedIn
});
const mapDispatchToProps = dispatch => {
  return {
    validateUser: (user, password) => dispatch(validateUser(user, password))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
