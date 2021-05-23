function SearchForm() {
  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header">Book Search</div>
      <div className="card-body">
        <h2 className="card-title" style={{ fontSize: "1rem" }}>
          Book Search
        </h2>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <form className="d-flex flex-column">
          <div className="form-group">
            <label htmlFor="search">Book</label>
            <input type="text" className="form-control" id="search" />
          </div>
          <button className="btn btn-primary ml-auto px-5">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
