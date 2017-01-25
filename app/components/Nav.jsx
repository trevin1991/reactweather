let React = require("react"),
    {Link, IndexLink} = require("react-router");

class Nav extends React.Component {
    render() {
        return (
            <div>
                <h2>Nav Component</h2>
                <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
                <Link to="/favourites" activeClassName="active">Favourites</Link>
                <Link to="/about" activeClassName="active">About</Link>
                <Link to="/examples" activeClassName="active">Examples</Link>
            </div>
        )
    }
}

module.exports = Nav;