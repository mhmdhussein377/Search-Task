import { useState } from 'react'
import SearchBar from "./components/SearchBar/index"

function App() {

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className='p-10'>
      <h1 className='mb-10 text-2xl font-semibold'>Search</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
    </div>
  )
}

export default App
