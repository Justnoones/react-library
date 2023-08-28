import React from 'react'
import BookList from './BookList'

export default function BookLists () {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-3">
        {[1,2, 3, 4].map(_ => ( <BookList key={_} />) )}
    </div>
  )
}
