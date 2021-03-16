import Navbar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchContainer from "./components/SearchContainer"
import Details from './components/Details'

const Home = () => {
    return (
        <Router>
            <Navbar />
            <main>
                <div className="jumbotron text-center">
                    <h1>Giphy Search</h1>
                    <h5 className="text-muted">The true source for all things giphy...</h5>
                </div>
                <Switch>
                    <Route path="/giphy/:giphyId" component={Details} />
                    <Route path="/" component={SearchContainer} />
                </Switch>
            </main>
        </Router>
    )
}

export default Home