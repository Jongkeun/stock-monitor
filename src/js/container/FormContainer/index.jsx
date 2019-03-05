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
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    //getContent(event.target.value).then((content)=> {this.setState({ price: content });});
  }

  onSubmit(event) {
    event.preventDefault();
    getContent(this.state.seo_title)
      .then((content)=> {
        this.setState({ price: content });
      });
  }
  render() {
    const { seo_title, price } = this.state;
    return (
      <div>
        <form className="article-form"  onSubmit={this.onSubmit}>
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
        <lable>
            {price}
        </lable>
      </div>

    );
  }
}
export default FormContainer;
