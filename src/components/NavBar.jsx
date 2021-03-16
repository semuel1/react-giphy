import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Giphy Search</Link>
            </div>
        </nav>
    )
}
export default NavBar