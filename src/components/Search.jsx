const Search = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                value={props.query}
                onChange={props.handleChange}
            />
            <input
                type="submit"
                value="search"
            />
        </form>
    )
}

export default Search