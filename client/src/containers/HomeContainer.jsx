import { connect } from "react-redux";
import getFixtures from "../actions/getFixtures.js";
import getStandings from "../actions/getStandings.js";
import Home from "../components/MainPage.jsx";
import getFavorite from "../actions/getFavorite.js";

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
