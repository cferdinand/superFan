import { connect } from "react-redux";
import getTeams from "../actions/dispatchActions/getTeams.js";
import ChooseTeam from "../components/TeamChooser.jsx";

const mapStateToProps = store => ({
  allTeams: store.teams
});
const mapDispatchToProps = dispatch => {
  return {
    teams: () => dispatch(getTeams())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChooseTeam);
