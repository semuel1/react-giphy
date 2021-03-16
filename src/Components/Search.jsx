import {useState} from 'react'

const Search  = () => {
    return(
        <form onSubmit={props.handleSubmit}>
            <input
            type="text"
            value={props.query}
            onChange={props.handleChange}/>
            <input type='submit'/>
        </form>
    )
    }
    // const [query, setQuery] = useState('')

    // const handleSubmit = e  => {
    //     e.preventDefault()
    //     console.log('submitted!', query)
    // }
    // const handleChange = e => {
    //     setQuery(e.target.value)
    // }
    // return (
    //     <form onSubmit={handleSubmit}>
    export default Search