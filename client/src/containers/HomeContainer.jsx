import { connect } from "react-redux";
import getFixtures from "../actions/dispatchActions/getFixtures.js";
import getStandings from "../actions/dispatchActions/getStandings.js";
import Home from "../components/Home.jsx";
import getFavorite from "../actions/dispatchActions/getFavorite.js";

const mapStateToProps = store => ({
  favoriteTeam: store.favorite.team_id
});

const mapDispatchToProps = dispatch => {
  return {
    getFixtures: team => dispatch(getFixtures([team])),
    getStandings: leagueId => dispatch(getStandings([leagueId])),
    getFavorite: () => dispatch(getFavorite())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
