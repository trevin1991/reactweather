let React = require("react"),
    WeatherForm = require("WeatherForm"),
    WeatherMessage = require("WeatherMessage"),
    ErrorModal = require("ErrorModal"),
    openWeatherMap = require("openWeatherMap");

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            location: null,
            temp: null,
            isLoading: false,
            errorMessage: null
        }
    }

    componentDidMount() {
        let location = this.props.location.query.location;

        if(location && location.length) {
            this.handleSearch(location);
            window.location.hash = "#/";
        }
    }

    componentWillReceiveProps(newProps) {
        let location = newProps.location.query.location;

        if(location && location.length) {
            this.handleSearch(location);
            window.location.hash = "#/";
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
            self.setState({
                isLoading: false,
                errorMessage: errorMessage.message
            });
        });
    }

    render() {
        function renderMessage() {
            if(this.state.isLoading)
                return (<h3 className="text-center">Fetching weather...</h3>);
            else if(this.state.temp && this.state.location)
                return (<WeatherMessage location={ this.state.location } temp={ this.state.temp }/>);
        }

        function renderError() {
            if(this.state.errorMessage !== null)
                return (
                    <ErrorModal message={ this.state.errorMessage }/>
                );
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={ this.handleSearch.bind(this) }/>
                {renderMessage.call(this)}
                {renderError.call(this)}
            </div>
        )
    }
}

module.exports = Weather;