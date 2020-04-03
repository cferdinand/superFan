import { connect } from "react-redux";
import Standings from "../components/Standings.jsx";

const mapStateToProps = store => ({
  standings: store.standings
});

export default connect(mapStateToProps, null)(Standings);
