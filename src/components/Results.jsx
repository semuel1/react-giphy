import { Link } from "react-router-dom"

const Results = props => {
    let results = props.searchResults.map((result, idx) => {
        let path = `/giphy/${result.id}`
        return (
            <div key={idx}>
                <img
                    src={result.images.fixed_height.url}
                    alt={result.title}
                    height={result.images.fixed_height.height}
                    width={result.images.fixed_height.width}
                />
                <p>{result.title}</p>
                <Link to={path}>View</Link>
            </div>
        )
    })

    return (
        <div>
            {results}
        </div>
    )
}

export default Results