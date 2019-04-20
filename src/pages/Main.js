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
    activeMatchMode: "any",
  };

  handleUpdateAllLabels = detectedLabels => {
    const { uniqueLabels } = this.state;

    const moreUniqueLabels = [];

    detectedLabels.map(detectedLabel => {
      if (!uniqueLabels.includes(detectedLabel)) {
        moreUniqueLabels.push(detectedLabel);
      }
      return null;
    });

    const updatedUniqueLabels = [...uniqueLabels, ...moreUniqueLabels].sort();

    /* Add detected label if it's not already in the list of image uniqueLabels */
    this.setState({
      uniqueLabels: updatedUniqueLabels,
    });
  };

  handleUpdateFilters = selectedFilters => {
    this.setState({
      activeFilters: selectedFilters,
    });
  };

  handleUpdateMatchMode = matchMode => {
    this.setState({ activeMatchMode: matchMode });
  };

  render() {
    const { uniqueLabels, activeFilters, activeMatchMode } = this.state;
    return (
      <StyledMain>
        <Sticky>
          <TopBar />
          <Filters
            activeFilters={activeFilters}
            uniqueLabels={uniqueLabels}
            handleUpdateFilters={this.handleUpdateFilters}
            handleUpdateMatchMode={this.handleUpdateMatchMode}
          />
        </Sticky>
        <Page>
          <Box mb={3}>
            <ImageList
              handleUpdateAllLabels={this.handleUpdateAllLabels}
              activeFilters={activeFilters}
              activeMatchMode={activeMatchMode}
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
