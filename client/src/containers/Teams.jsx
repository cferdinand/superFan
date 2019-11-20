import { connect } from "react-redux";
import getTeams from "../actions/getTeams.js";
import ChooseTeam from "../components/ChooseTeam.jsx";

const mapStateToProps = store => ({
  teams: store.teams
});
const mapDispatchToProps = dispatch => {
  getTeams();
};
export default connect(mapStateToProps, mapDispatchToProps)(ChooseTeam);
