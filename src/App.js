import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import ListContainer from "./components/ListContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={ListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
