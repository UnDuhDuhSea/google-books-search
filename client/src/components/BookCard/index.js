function BookCard({ book }) {
  const { title, authors, description, imageLinks, infoLink } = book.volumeInfo;
  return (
    <div className="card mb-3 bg-secondary border-dark border-bottom-0 border-right-0 border-left-0">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={imageLinks.thumbnail} alt={`Thumbnail of ${title}`} />
        </div>
        <div className="col-md-8">
          <div className="card-body text-white bg-secondary">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{authors.join(", ")}</p>
            <p className="card-text">{description}</p>
            <div class="d-flex justify-content-end">
              <a href={infoLink} class="btn btn-info mr-3">
                View
              </a>
              <a href="#" class="btn btn-success mr-3">
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
