function Section({ title, children }) {
  return (
    <div className="card text-white bg-secondary mb-3 mt-3">
      <div className="card-body">
        <h2 className="card-title" style={{ fontSize: "1rem" }}>
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

export default Section;
