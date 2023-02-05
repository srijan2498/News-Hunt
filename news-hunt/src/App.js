import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer'
import Pagination from './components/Pagination';
import ServerDown from './components/ServerDown';

function App() {
    const [search, setSearch] = useState("")
    const [totalPages, setTotalPages] = useState()
    const [page, setPage]=useState(1)
    const [error, setError]=useState(false)
    return (
        <>
            <Navbar search={search} setSearch={setSearch} setTotalPages={setTotalPages} setPage={setPage} />
            {!search && !error &&<Home key={page} setTotalPages={setTotalPages} setError={setError} setPage={setPage} page={page}/>}
            {search && !error && <NewsContainer search={search} setError={setError} setTotalPages={setTotalPages} key={`${search}${page}`} setPage={setPage} page={page}/>}
            {!error &&<Pagination totalPages={totalPages} page={page} setPage={setPage}/>}
            {error && <ServerDown/>}
        </>
    )
}

export default App;
