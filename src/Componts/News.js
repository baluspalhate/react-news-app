import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=06bcfb11d4ec4b3996641697deeaf914&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }
  handlePrevClick = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=06bcfb11d4ec4b3996641697deeaf914&page=
    ${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };
  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults.pageSize)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=06bcfb11d4ec4b3996641697deeaf914page=
      ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);

      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1>News_App Top Headlines</h1>
        <loading />
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previews
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
