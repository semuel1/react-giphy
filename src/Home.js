import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchContainer from "./components/SearchContainer"
import Details from './components/Details'

const Home = () => {
    return (
        <Router>
            <h1>Giphy Search</h1>
            <h5>The true source for all things giphy...</h5>
            <Switch>
                <Route path="/giphy/:giphyId" component={Details} />
                <Route path="/" component={SearchContainer} />
            </Switch>
        </Router>
    )
}

export default Home