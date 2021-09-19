import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = function () {
  return (
    <Provider store={store}>
      <Router>
        <MainComponent />
      </Router>
    </Provider>
  );
};

export default App;
