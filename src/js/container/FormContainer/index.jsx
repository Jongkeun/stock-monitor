import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../../components/Input";
import './style.css'

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <form className="article-form">
        <Input
          id="seo_title"
          text="SEO title"
          label="seo_title"
          type="text"
          className="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;
