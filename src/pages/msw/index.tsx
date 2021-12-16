import { useState } from 'react';

export default function Home({ book }: any) {
  const [reviews, setReviews] = useState<any>(null);

  const handleGetReviews = () => {
    // Client-side request are mocked by `mocks/browser.js`.
    fetch('/reviews')
      .then((res) => res.json())
      .then(setReviews);
  };

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <a href="#" onClick={handleGetReviews}>
        Load reviews
      </a>
      {reviews && (
        <ul>
          {reviews.map((review: any) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>{review.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.js`.
  const res = await fetch('https://my.backend/book');
  const book = await res.json();

  return {
    props: {
      book,
    },
  };
}
