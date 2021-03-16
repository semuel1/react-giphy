const Search = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                        <form onSubmit={props.handleSubmit}>
                            <input
                                type="text"
                                value={props.query}
                                onChange={props.handleChange}
                                className="form-control"
                            />
                            <input 
                                type="submit" 
                                value="search"
                                className="btn btn-primary float-right mt-3"
                            />
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Search