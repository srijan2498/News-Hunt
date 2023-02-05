import React from 'react'

const Pagination = ({ totalPages, setPage, page }) => {
    const changePage = (i) => {
        setPage(i)
    }
    return (
        <div className='pagination-div'>
            {totalPages <= 10 ? [...Array(totalPages)].map((_, i) => {
                return (
                    <span onClick={() => changePage(i + 1)} className={`page-item ${page === i + 1 ? "selectedPage" : ""}`} key={i}>{i + 1}</span>
                )
            }) : [...Array(10)].map((_, i) => {
                return (
                    <span onClick={() => changePage(i + 1)} className={`page-item ${page === i + 1 ? "selectedPage" : ""}`} key={i}>{i + 1}</span>
                )
            })}
        </div>
    )
}

export default Pagination
