import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import lightIcon from '../assets/light.svg';
import darkIcon from '../assets/dark.svg';

export default function Navbar() {

    let [search, setSearch] = useState("");
    let navigate = useNavigate();
    let searchValueHandler = e => {
        e.preventDefault();
        navigate(`/?q=${search}`);
    }

    let { changeTheme, isDark } = useTheme();


    return (
        <nav className={`border border-b-1 ${isDark ? "bg-dbg border-primary" : "bg-white"}`}>
            <ul className='flex justify-between p-3 items-center max-w-6xl mx-auto'>
                <li className='flex items-center gap-3'>
                    <button onClick={searchValueHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isDark && "text-white"}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                    <form onSubmit={searchValueHandler}>
                        <input value={search} onChange={e => setSearch(e.target.value)} type='text' name='q' placeholder='search books..' className={`outline-none bg-inherit px-2 py-1 rounded-lg ${isDark && "text-white"}`} autoComplete='off' />
                    </form>
                    <button onClick={searchValueHandler} className='text-white bg-primary px-3 py-2 rounded-2xl flex items-start gap-1'>
                        <span>Search</span>
                    </button>
                </li>
                <Link to={"/"} className='flex items-center gap-3 md:-ml-32'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isDark && "text-white"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                    <span className='text-2xl font-bold text-primary hidden md:block'>Book Store</span>
                </Link>
                <li className='flex gap-3 items-center'>
                    <Link to={"/create"} className='text-white bg-primary px-3 py-2 rounded-2xl flex items-start gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className='hidden md:block'>Create Book</span>
                    </Link>
                    <div className='w-11'>
                        <img src='https://i.pinimg.com/474x/40/3c/6e/403c6e5bd46ac212351fd80f63a9849f.jpg' className='w-full rounded-full' />
                    </div>
                    <div className='cursor-pointer'>
                        {isDark && <img src={lightIcon} className='w-8' onClick={() => changeTheme("light")} />}
                        {!isDark && <img src={darkIcon} className='w-8' onClick={() => changeTheme("dark")} />}
                    </div>
                </li>
            </ul>
        </nav>
    )
}
