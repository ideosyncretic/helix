import React, { Component } from "react";
import Main from "./pages/Main";
import TopBar from "./components/layout/TopBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBar />

        <Main />
      </React.Fragment>
    );
  }
}

export default App;
