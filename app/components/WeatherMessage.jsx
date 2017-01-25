let React = require("react");

class WeatherMessage extends React.Component {
    render() {
        let location = this.props.location,
            temp = this.props.temp;
        return (
            <h3>It's {temp} in {location}</h3>
        )
    }
}

module.exports = WeatherMessage;