const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger z-1"
          style={{ zIndex: "1", left: "50%" }}
        >
          {source}
        </span>
        <img
          src={
            !imageUrl
              ? "https://c.ndtvimg.com/2023-05/60ptnvr_virat-kohli-bcci_625x300_23_May_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small>
              By {author ? author : "Unknown"} on{" "}
              {new Date(date).toDateString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
