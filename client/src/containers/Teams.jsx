import { connect } from "react-redux";
import getTeams from "../actions/getTeams.js";
import ChooseTeam from "../components/ChooseTeam.jsx";

const mapStateToProps = store => ({
  allTeams: store.teams
});
const mapDispatchToProps = dispatch => {
  return {
    teams: () => dispatch(getTeams())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChooseTeam);
