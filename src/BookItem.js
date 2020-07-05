import React, { useState, useEffect } from "react";

// isbnから本の情報を取得できるAPI
const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:`;

function BookItem(props) {
  const [bookJson, setBookJson] = useState(null);

  useEffect(() => {
    fetch(url + props.isbn)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const volumeInfo = json.items[0].volumeInfo;
        const title = volumeInfo.title;
        const subtitle = volumeInfo.subtitle;
        const imageUrl = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : "book.svg";
        setBookJson({ title, subtitle, imageUrl });
      });
  }, []);

  if (!bookJson) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div>{bookJson.title}</div>
      <div>{bookJson.subtitle}</div>
      <div>
        <img src={bookJson.imageUrl} width="128" height="160"></img>
      </div>
    </div>
  );
}

export default BookItem;
