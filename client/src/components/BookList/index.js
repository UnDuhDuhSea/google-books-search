import BookCard from "../BookCard";

function BookList() {
  return (
    <div>
      <h2 style={{ fontSize: "1.2rem" }}>Results</h2>
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}

export default BookList;
