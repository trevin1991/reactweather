let React = require("react"),
    {Link} = require("react-router");

const Examples = () => {
    return (
        <div>
            <h1 className="page-title text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ul>
                <li>
                    <Link to="/?location=Minsk">Minsk, Belarus</Link>
                </li>
                <li>
                    <Link to="/?location=Warsaw">Warsaw, Poland</Link>
                </li>
                <li>
                    <Link to="/?location=Moscow">Moscow, Russia</Link>
                </li>
                <li>
                    <Link to="/?location=Berlin">Berlin, Germany</Link>
                </li>
            </ul>
        </div>
    )
};

module.exports = Examples;