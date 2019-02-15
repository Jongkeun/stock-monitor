import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.label}>{this.props.text}</label>
        <input
          type={this.props.type}
          className="form-control"
          id={this.props.id}
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </div>);
  };
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Input;
