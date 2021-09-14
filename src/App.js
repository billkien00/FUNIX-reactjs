import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MainComponent />
        </Router>
      </Provider>
    );
  }
}
