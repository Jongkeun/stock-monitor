import React, { Component } from "react";
import PropTypes from "prop-types";

class PriceRow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <label>
        {this.props.price}
      </label>
    );
  };
}

export default PriceRow;
