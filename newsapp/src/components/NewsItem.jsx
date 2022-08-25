import React from "react";

const NewsItem = (props) => {
  let { title, descripton, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{descripton}...</p>
          <span class="badge text-bg-secondary">{source}</span>
          <p class="card-text">
            <small class="text-muted">
              {author} on {date}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-warning">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
