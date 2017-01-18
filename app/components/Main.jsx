let React = require("react"),
    Nav = require("Nav");

class Main extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <h2>Main component</h2>
                {this.props.children}
            </div>
        )
    }
}

module.exports = Main;