import React, { Component } from "react";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";
import { Line } from "rc-progress";

import Filters from "../components/Filters";
import ImageList from "../components/ImageList";
import Page from "../components/layout/Page";
import TopBar from "../components/layout/TopBar";

class Main extends Component {
  state = {
    uniqueLabels: [], // for generating filters
    activeFilters: [],
    activeMatchMode: "any",
    annotatedCount: 0,
    isLoading: true,
    totalImages: 0,
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

  handleUpdateAnnotatedCount = (annotatedCount, isLoading) => {
    this.setState({ annotatedCount, isLoading });
  };

  handleUpdateTotalImages = totalImages => {
    this.setState({ totalImages });
  };

  render() {
    const {
      activeMatchMode,
      activeFilters,
      annotatedCount,
      isLoading,
      uniqueLabels,
      totalImages,
    } = this.state;
    return (
      <StyledMain>
        <Sticky>
          <TopBar />
          <Filters
            activeFilters={activeFilters}
            uniqueLabels={uniqueLabels}
            handleUpdateFilters={this.handleUpdateFilters}
            handleUpdateMatchMode={this.handleUpdateMatchMode}
            isLoading={isLoading}
          />
          {annotatedCount !== totalImages && (
            <StyledLine
              percent={(annotatedCount / totalImages) * 100}
              strokeWidth="0.2"
              strokeColor="#FF4000"
              strokeLinecap="square"
              trailColor="#000"
            />
          )}
        </Sticky>
        <Page>
          <Box mb={3}>
            <ImageList
              annotatedCount={annotatedCount}
              handleUpdateAllLabels={this.handleUpdateAllLabels}
              activeFilters={activeFilters}
              activeMatchMode={activeMatchMode}
              handleUpdateAnnotatedCount={this.handleUpdateAnnotatedCount}
              handleUpdateTotalImages={this.handleUpdateTotalImages}
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

const StyledLine = styled(Line)`
  position: fixed;
  top: 0;
`;

const Sticky = styled.div`
  position: relative;
`;

export default Main;
