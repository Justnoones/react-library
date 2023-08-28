import React from 'react'
import gojo from "../assets/download.jpg";

export default function BookList () {
  return (
    <div className="p-4 border border-1">
        <img src={gojo} />
        <div className="text-center space-y-2">
        <h1 className="mt-3">Book Title</h1>
        <p>Description</p>
        {/* gnere */}
        <div className="flex flex-wrap">
            {['travel', 'knowledge', 'economics', 'business'].map(_ => (
            <span
                className="mx-1 my-1 text-white rounded-lg px-2 py-1 text-sm bg-blue-600">
                {_}
            </span>
            ))}
        </div>
        </div>
    </div>
  )
}
