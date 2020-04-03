import { connect } from "react-redux";
import FavoriteTeams from "../components/FavoriteTeams.jsx";

const mapStateToProps = store => ({
  favoriteTeam: store.favorite
});

export default connect(mapStateToProps)(FavoriteTeams);
