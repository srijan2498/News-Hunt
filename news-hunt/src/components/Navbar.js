import React, { useState } from 'react'
import './style.css'

const Navbar = ({ search, setSearch, setPage }) => {

    return (
        <div className='navbar'>
            <div className="logo">News-Hunt</div>
            <div className="search-bar">
                <input type="search" name="searchField" placeholder='e.g. sports' id="searchField" value={search} onChange={(e) => {
                    setSearch(e.target.value)
                    setPage(1)
                }} />
            </div>
        </div>
    )
}

export default Navbar
