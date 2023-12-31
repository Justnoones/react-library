import React from 'react';
import useFetch from '../hooks/useFetch';
import BookList from './BookList';
import { useLocation } from 'react-router-dom';

export default function BookLists () {
  let location = useLocation();
  let param = new URLSearchParams(location.search);
  let searchValue = param.get("q");
  const url = `http://localhost:3001/Books${searchValue ? "/?q="+searchValue : ""}`;

  let { data : books, loading, error } = useFetch(url);

  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-3">
        {loading && <p>Loading ...</p>}
        {books && books.map(book => (
          <BookList key={book.id} book={book} />
        ))}
      </div>
      {books && !books.length && <p className='text-xl text-gray-500 text-center'>No Search Results Found.</p>}
    </>
  )
}