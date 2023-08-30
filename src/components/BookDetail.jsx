import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import gojo from '../assets/download.jpg';
import useTheme from '../hooks/useTheme';

export default function BookDetail () {
  let param = useParams();
  const url = `http://localhost:3001/Books/${param.id}`
  let { data : book, loading, error } = useFetch(url);
  let navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout( () => {
        navigate('/')
      }, 2000)
    }
  }, [error, navigate]);

  let { isDark } = useTheme();

  return (
    <div className='h-screen'>
      {error && <p>{error}</p>}
      {loading && <p>loading ...</p>}
      {book &&
        <div className='grid grid-cols-2'>
          <div className=''>
            <img src={gojo} className='w-[75%]' />
          </div>
          <div className='space-y-3'>
            <h1 className={`text-3xl font-bold ${isDark && "text-white"}`}>{book.title}</h1>
            <div className='space-x-3'>
              {book.categories.map(category => (
                <span key={category} className='bg-blue-500 text-white rounded-lg py-1 px-2 text-sm'>{category}</span>
              ))}
            </div>
            <p className={`${isDark && "text-white"}`}>{book.description}</p>
          </div>
        </div>
      }
    </div>
  )
}
