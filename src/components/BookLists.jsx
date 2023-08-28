import React from 'react';
import useFetch from '../hooks/useFetch';
import BookList from './BookList';

export default function BookLists () {
  const url = "http://localhost:3001/Books";
  let { data : books, loading, error } = useFetch(url);

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-3">
      {loading && <p>Loading ...</p>}
      {books && books.map(book => (
        <BookList key={book.id} book={book} />
      ))}
    </div>
  )
}
