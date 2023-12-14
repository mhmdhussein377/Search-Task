import {useEffect, useState} from 'react'
import SearchBar from "./components/SearchBar"
import {articles} from "./constants/articles"
import Article from "./components/Article"

function App() {

    const [searchTerm,
        setSearchTerm] = useState("")
    const [data,
        setData] = useState(articles)

    useEffect(() => {
        const filteredData = articles.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()))
        if(searchTerm === "") {
          setData(articles)
        } else {
          setData(filteredData)
        }
    }, [searchTerm])

    return (
        <div className='p-10'>
            <h1 className='mb-10 text-2xl font-semibold'>Search</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className='mt-10 flex flex-col gap-8'>
                {data.map(item => (<Article key = {item.title} {...item} />))}
            </div>
        </div>
    )
}

export default App
