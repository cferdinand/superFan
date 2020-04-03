import { connect } from "react-redux";
import Fixtures from "../components/Fixtures.jsx";
import getHighlights from "../actions/dispatchActions/getHighlights.js";

const mapStateToProps = store => ({
  favoriteTeam: store.favorite.team_id,
  fixtures: store.fixtures
});

const mapDispatchToProps = dispatch => {
  return {
    getHighlights: matchInfo => dispatch(getHighlights(matchInfo))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Fixtures);
