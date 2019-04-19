import React, { Component } from "react";
import { AppProvider, Frame, TopBar } from "@shopify/polaris";
import logoDark from "./assets/logo_medium_dark.jpg";
import Main from "./pages/Main";

const theme = {
  colors: {
    topBar: {
      background: "black",
    },
  },
  logo: {
    width: 124,
    topBarSource: logoDark,
    url: "https://helix.re",
    accessibilityLabel: "Helix Re",
  },
};

class App extends Component {
  render() {
    return (
      <AppProvider theme={theme}>
        <Frame topBar={<TopBar />}>
          <Main />
        </Frame>
      </AppProvider>
    );
  }
}

export default App;
