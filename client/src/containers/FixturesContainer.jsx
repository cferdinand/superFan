import { connect } from "react-redux";
import getFixtures from "../actions/getFixtures.js";
import getHighlights from "../actions/getHighlights.js";
import Fixtures from "../components/Fixtures.jsx";

const mapStateToProps = store => ({
  favoriteTeam: store.favorite.team_id,
  fixtures: store.fixtures
});
const mapDispatchToProps = dispatch => {
  return {
    getFixtures: team => dispatch(getFixtures([team])),
    getHighlights: matchInfo => dispatch(getHighlights(matchInfo))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Fixtures);
