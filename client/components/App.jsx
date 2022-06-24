import React, {Component, Fragment }from "react";
// import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default App;
