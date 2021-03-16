import { Link } from "react-router-dom"

const Results = props => {
    let results = props.searchResults.map((result, idx) => {
        let path = `/giphy/${result.id}`
        return ( 
            <div key={idx} className="col-md-4 mt-4">
                <div className="card">
                    <img  
                        className="card-img-top"
                        src={result.images.fixed_height.url} 
                        alt={result.title}
                        height={result.images.fixed_height.height}
                        width={result.images.fixed_height.width}
                    />
                    <div className="card-body">
                        <p className="card-text">{result.title}</p>
                        <Link className="btn btn-secondary" to={path}>View</Link>
                        {/* <a href="#" className="btn btn-secondary">View</a> */}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                {results}
            </div>
        </div>
    )
}

export default Results