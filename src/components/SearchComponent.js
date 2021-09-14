import React, { Component } from "react";

export default class searchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }
  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };
  render() {
    return (
      <form onSubmit={this.onSearch} className="form-inline col-lg-3 ">
        <input
          name="keyword"
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          value={this.state.keyword}
          onChange={this.onChange}
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}
