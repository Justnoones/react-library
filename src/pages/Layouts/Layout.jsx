import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout () {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <a>Create</a>
                </li>
                <li>
                    <a>Search</a>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}