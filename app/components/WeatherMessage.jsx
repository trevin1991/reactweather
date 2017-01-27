let React = require("react");

const WeatherMessage = (props) => {
    return (
        <h3 className="text-center">It's {props.temp} in {props.location}</h3>
    )
};

module.exports = WeatherMessage;