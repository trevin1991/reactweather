let React = require("react"),
    WeatherForm = require("WeatherForm"),
    WeatherMessage = require("WeatherMessage"),
    openWeatherMap = require("openWeatherMap");

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false
        }
    }

    handleSearch(location) {
        let self = this;
        this.setState({isLoading: true});
        openWeatherMap.getTemp(location).then((temp) => {
            self.setState({
                isLoading: false,
                location,
                temp
            });
        }, (errorMessage) => {
            self.setState({isLoading: false});
            alert(errorMessage);
        });
    }

    render() {
        function renderMessage() {
            if(this.state.isLoading)
                return (<h3>Fetching weather...</h3>);
            else if(this.state.temp && this.state.location)
                return (<WeatherMessage location={ this.state.location } temp={ this.state.temp }/>);
        }

        return (
            <div>
                <h2>Get Weather</h2>
                <WeatherForm onSearch={ this.handleSearch.bind(this) }/>
                {renderMessage.call(this)}
            </div>
        )
    }
}

module.exports = Weather;