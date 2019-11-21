import { connect } from "react-redux";
import Highlights from "../components/Highlights.jsx";

const mapStateToProps = store => ({
  highlight: store.highlights
});
export default connect(mapStateToProps)(Highlights);
