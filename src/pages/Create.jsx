import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import useTheme from '../hooks/useTheme';

export default function Create () {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [category, setCategory] = useState("");
  let [categories, setCategories] = useState([]);
  let navigate = useNavigate();

  let { setPostData, data : book, loading } = useFetch("http://localhost:3001/Books", "POST");

  let addNewCategory = e => {
    e.preventDefault();
    if(category && categories.includes(category)) {
      setCategory("");
      return;
    }
    setCategories(ps => [category, ...ps]);
    setCategory('');
  }
  console.log(loading);

  useEffect(() => {
    if (book) {
      navigate(`/books/${book.id}`);
    }
  }, [book, navigate]);

  let createNewBook = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 200);
    const newBookData = {
      id,
      title,
      description,
      categories
    }
    setPostData(newBookData);
  }

  let { isDark } = useTheme();

  return (
    <form className="w-full max-w-lg mx-auto mt-5 h-screen" onSubmit={createNewBook}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark && "text-white"}`} htmlFor="book-title">
            Title
          </label>
          <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 ${isDark && "outline-none bg-inherit text-white"}`} id="book-title" type="text" placeholder="Book Title" onChange={e => setTitle(e.target.value)} value={title} />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark && "text-white"}`} htmlFor="bookDescription">
            Description
          </label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 ${isDark && "outline-none bg-inherit text-white"}`} id="bookDescription" placeholder="Book Description"></textarea>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark && "text-white"}`} htmlFor="category">
            Categories
          </label>
        <div className="flex items-center space-x-2">
          <input value={category} onChange={e => setCategory(e.target.value)} className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 ${isDark && "outline-none bg-inherit text-white"}`} id="category" type="text" placeholder="Book Category" />
            <button className="bg-primary p-1 rounded-lg mb-3" onClick={addNewCategory}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white p-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <div className='flex flex-wrap'>
            {categories.map(category => (
              <span
                key={category}
                className="mx-1 my-1 text-white rounded-lg px-2 py-1 text-sm bg-blue-600">
                {category}
              </span>
              ))}
            </div>
        </div>
      </div>
      <button className='text-white bg-primary px-3 py-2 rounded-2xl flex items-start gap-1 w-full justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{loading ? "Creating A Book" : "Create Book"}</span>
      </button>
    </form>
  )
}
