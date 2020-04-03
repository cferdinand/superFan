import { connect } from "react-redux";
import Nav from "../components/Nav.jsx";
import logout from "../actions/dispatchActions/logout.js";

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(null, mapDispatchToProps)(Nav);
