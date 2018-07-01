import { connect } from "react-redux";
import React from "react";

import { createSpot } from "../../actions/spot_actions";
import CreateSpot from "./create_spot";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  createSpot: spot => dispatch(createSpot(spot))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSpot);
