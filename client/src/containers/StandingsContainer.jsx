import { connect } from "react-redux";
import getStandings from "../actions/getStandings.js";
import Standings from "../components/Standings.jsx";

const mapStateToProps = store => ({
  standings: store.standings
});
const mapDispatchToProps = dispatch => {
  return {
    getStandings: leagueId => dispatch(getStandings([leagueId]))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Standings);
