import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 45)}...</h5>
            <p className="card-text">{description.slice(0, 90)}...</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target={"_blank"}
              className="btn bt-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
