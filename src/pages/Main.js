import React, { Component } from "react";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";

import Filters from "../components/Filters";
import ImageList from "../components/ImageList";
import Page from "../components/layout/Page";
import TopBar from "../components/layout/TopBar";

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
      <StyledMain>
        <Sticky>
          <TopBar />
          <Filters
            uniqueLabels={uniqueLabels}
            handleUpdateFilters={this.handleUpdateFilters}
          />
        </Sticky>
        <Page>
          <Box mb={3}>
            <ImageList
              handleUpdateAllLabels={this.handleUpdateAllLabels}
              activeFilters={activeFilters}
            />
          </Box>
        </Page>
      </StyledMain>
    );
  }
}

const StyledMain = styled(Flex)`
  overflow-y: hidden;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

const Sticky = styled.div`
  position: relative;
`;

export default Main;
