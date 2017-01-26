let React = require("react"),
    ReactDOM = require("react-dom"),
    {Route, Router, IndexRoute, hashHistory} = require("react-router"),
    Main = require("Main"),
    Weather = require("Weather"),
    About = require("About"),
    Examples = require("Examples"),
    Favourites = require("Favourites");

// Load foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Weather}/>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <Route path="favourites" component={Favourites}/>
        </Route>
    </Router>,
    document.getElementById("app")
);