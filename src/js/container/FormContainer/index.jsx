import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../../components/Input";
import './style.css'
import { getContent } from "../../utils/scraper"

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: "",
      price: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    getContent().then((content)=> {this.setState({ price: content });});
  }
  render() {
    const { seo_title, price } = this.state;
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
        <lable>
          {price}
        </lable>
      </form>
    );
  }
}
export default FormContainer;
