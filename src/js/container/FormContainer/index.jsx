import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchInput from "../../components/SearchInput";
import PriceRow from "../../components/PriceRow";
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
        <form className="article-form">
          <SearchInput
            id="seo_title"
            text="SEO title"
            label="seo_title"
            type="text"
            className="seo_title"
            value={seo_title}
            handleChange={this.handleChange}
          />
          <input tabIndex="-1" type="submit" onClick={this.onSubmit} />
        </form>
        <PriceRow price={price}/>
      </div>

    );
  }
}
export default FormContainer;
