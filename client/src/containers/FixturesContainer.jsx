import { connect } from "react-redux";
import getFixtures from "../actions/getFixtures.js";
import Fixtures from "../components/Fixtures.jsx";

const mapStateToProps = store => ({
  favoriteTeam: store.favorite.team_id,
  fixtures: store.fixtures
});
const mapDispatchToProps = dispatch => {
  return {
    getFixtures: team => dispatch(getFixtures([team]))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Fixtures);
