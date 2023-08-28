import React from 'react'
import gojo from "../assets/download.jpg";
import { Link } from 'react-router-dom';

export default function BookList ({book}) {
  return (
    <Link to={`books/${book.id}`}>
      <div className="p-4 border border-1">
            <img src={gojo} />
          <div className="text-center space-y-2">
            <h1 className="mt-3">{book.title}</h1>
            <p>{book.description}</p>
            {/* gnere */}
            <div className="flex flex-wrap">
                {book.categories.map(_ => (
                <span
                    key={_}
                    className="mx-1 my-1 text-white rounded-lg px-2 py-1 text-sm bg-blue-600">
                    {_}
                </span>
                ))}
            </div>
          </div>
      </div>
    </Link>
  )
}
