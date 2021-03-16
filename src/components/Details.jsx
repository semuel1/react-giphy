import { useEffect, useState } from "react"
import axios from 'axios'

const Details = props => {
    const [searchResult, setSearchResult] = useState({})

    useEffect(() => {
        async function fetchData() {
            let id = props.match.params.giphyId
            if (!id) return;
            const url = `http://api.giphy.com/v1/gifs/${id}`
            const API_KEY = 'bs8lQnELCCJjLdAB2WjtRN8qPKJsSRCb'
            const response = await axios.get(`${url}?api_key=${API_KEY}`)
            const data = response.data.data
            setSearchResult(data)
        }
        fetchData()
    }, [])

    let result = <></>
    if (Object.keys(searchResult).length !== 0) {
        result = (
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <img
                                src={searchResult.images.fixed_height.url}
                                alt={searchResult}
                                className="img img-fluid"
                                width={searchResult.images.fixed_height.width}
                                height={searchResult.images.fixed_height.height}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h4>{searchResult.title}</h4>
                            <ul className="list-group">
                                <li className="list-group-item">Rating: {searchResult.rating}</li>
                                <li className="list-group-item">Source: <a href={searchResult.source} target="_blank">View Source</a></li>
                                <li className="list-group-item">Created: {searchResult.import_datetime}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        result = (
            <div>No result</div>
        )
    }
    return (
        <div className="container">
            {result}
        </div>
    )
}

export default Details