import React, { Component } from "react";
import { Box } from "@rebass/grid";

import Filters from "../components/Filters";
import ImageList from "../components/ImageList";
import Page from "../components/layout/Page";

class Main extends Component {
  state = {
    uniqueLabels: [], // for generating filters
    activeFilters: [],
  };

  handleUpdateAllLabels = detectedLabels => {
    const { uniqueLabels } = this.state;

    detectedLabels.map(detectedLabel => {
      return !uniqueLabels.includes(detectedLabel)
        ? /* Add detected label if it's not already in the list of image uniqueLabels */
          this.setState({
            uniqueLabels: [...uniqueLabels, detectedLabel].sort(),
          })
        : null;
    });
  };

  handleUpdateFilters = selectedFilters => {
    this.setState({
      activeFilters: selectedFilters,
    });
  };

  render() {
    const { uniqueLabels, activeFilters } = this.state;
    return (
      <Page>
        <Box mb={3}>
          <Filters
            uniqueLabels={uniqueLabels}
            handleUpdateFilters={this.handleUpdateFilters}
          />
        </Box>
        <Box mb={3}>
          <ImageList
            handleUpdateAllLabels={this.handleUpdateAllLabels}
            activeFilters={activeFilters}
          />
        </Box>
      </Page>
    );
  }
}

export default Main;
