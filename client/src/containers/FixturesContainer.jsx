import { connect } from "react-redux";
import getTeams from "../actions/getTeams.js";
import addFavorite from "../actions/addFavorite.js";
import ChooseTeam from "../components/ChooseTeam.jsx";

const mapStateToProps = store => ({
  favorite: store.favorite
});
const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch(getTeams()),
    favorite: team => dispatch(addFavorite(team))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChooseTeam);
