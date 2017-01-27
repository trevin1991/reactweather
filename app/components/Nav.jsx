let React = require("react"),
    {Link, IndexLink} = require("react-router");

class Nav extends React.Component {
    onSearch(e) {
        e.preventDefault();
        console.warn("Not yet implemented");
    }

    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Weather App</li>
                        <li><IndexLink to="/" activeClassName="active">Get Weather</IndexLink></li>
                        <li><Link to="/favourites" activeClassName="active">Favourites</Link></li>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                        <li><Link to="/examples" activeClassName="active">Examples</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={ this.onSearch.bind(this) }>
                        <ul className="menu">
                            <li><input type="search" placeholder="Enter the place"/></li>
                            <li><button type="submit" className="button">Get Weather</button></li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

module.exports = Nav;