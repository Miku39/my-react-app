import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";

// gistのurl
const url =
  "https://gist.githubusercontent.com/Miku39/a86fc6523e4d0943bc9f5e3bb3c6f49b/raw/545066861737859e8f62c2357a3713dc32bd0c85/book-list.json";

function Book(props) {
  const [bookListJson, setBookListJson] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setBookListJson(json);
      });
  }, []);

  if (!bookListJson) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {bookListJson.map((bookItem) => {
        return (
          <BookItem
            key={bookItem.isbn}
            isbn={bookItem.isbn}
            readAt={bookItem.readAt}
          />
        );
      })}
    </div>
  );
}

export default Book;
