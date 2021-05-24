function Section({ title, children }) {
  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header">Book Search</div>
      <div className="card-body">
        <h2 className="card-title" style={{ fontSize: "1rem" }}>
          {title}
        </h2>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        {children}
      </div>
    </div>
  );
}

export default Section;
