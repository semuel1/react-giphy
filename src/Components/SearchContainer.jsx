import Search from './Search'
import { useState } from 'react'
import axios from 'axios'


const SearchContainer = () => {
    const [query, setQuery] = useState("")
    const [hasSearched, setHasSearched] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        setHasSearched(true)

        const url = 'http://api.giphy.com/v1/gifs/search'
        const API_KEY = 'bs8lQnELCCJjLdAB2WjtRN8qPKJsSRCb'
        const response = await axios.get(`${url}?api_key=${API_KEY}&q=${query}`)
        const data = response.data.data
        console.log(data)
        setSearchResults(prev => [...data])
    }

    const handleChange = e => {
        setQuery(e.target.value)
    }

    let searchFormContent = <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        query={query}
    />


    return (
        <div>
            {searchFormContent}
            {hasSearched ? resultsContent : <></>}
        </div>
    )
}

export default SearchContainer
