import Search from './Search'
import { useState } from 'react'
import Results from './Results'
import axios from 'axios'

// const exampleResponse = {
//     "data": [
//         {
//             "type": "gif",
//             "id": "iuHaJ0D7macZq",
//             "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
//             "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
//             "rating": "pg",
//             "images": {
//                 "fixed_height": {
//                     "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
//                 }
//             }
//         },
//         {
//             "type": "gif",
//             "id": "Z1kpfgtHmpWHS",
//             "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
//             "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
//             "rating": "g",
//             "images": {
//                 "fixed_height": {
//                     "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
//                 }
//             }
//         }
//     ],
//     "meta": {
//         "status": 200,
//         "msg": "OK"
//     },
//     "pagination": {
//         "total_count": 1947,
//         "count": 25,
//         "offset": 0
//     }
// }

const SearchContainer = () => {
    const [query, setQuery] = useState("")
    const [hasSearched, setHasSearched] = useState(false)
    const [searchResults, setSearchResults] = useState([])

    // Bonus!
    // useEffect(() => {
    //     if(!query) return;
    //     console.log('yes')
    //     setHasSearched(true)
    //     async function fetchData() {
    //         const url = 'http://api.giphy.com/v1/gifs/search'
    //         const API_KEY = 'bs8lQnELCCJjLdAB2WjtRN8qPKJsSRCb'
    //         const response = await axios.get(`${url}?api_key=${API_KEY}&q=${query}`)
    //         const data = response.data.data
    //         console.log(data)
    //         setSearchResults([...data])
    //     }
    //     fetchData()
    // }, [query])


    const handleSubmit = async e => {
        e.preventDefault()
        setHasSearched(true)
        // const fakeAxiosCallResults = exampleResponse
        // const data = fakeAxiosCallResults.data
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
    let resultsContent = <Results 
        searchResults={searchResults}
    />

    return (
        <div>
            {searchFormContent}
            {hasSearched ? resultsContent : <></>}
        </div>
    )
}

export default SearchContainer