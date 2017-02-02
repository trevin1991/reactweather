let React = require("react");

const About = () => {
    return (
        <div>
            <h1 className="page-title text-center">About</h1>
            <p>This is study application to explore React.js</p>
            <p>For creation I've used</p>
            <ul>
                <li><a href="http://openweathermap.org/" target="blank">OpenWeatherMap API</a></li>
                <li><a href="https://facebook.github.io/react/" target="blank">React</a></li>
                <li><a href="http://foundation.zurb.com/" target="blank">ZURB Foundation</a></li>
            </ul>
            <p>GitHub repo is <a href="https://github.com/trevin1991/reactweather" target="blank">here</a></p>
            <p>Project deployed with heroku <a href="http://boiling-lowlands-39979.herokuapp.com/" target="blank">here</a></p>
        </div>
    )
};

module.exports = About;