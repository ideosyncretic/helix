import React, { Component } from "react";
import { Layout, Page } from "@shopify/polaris";
import Filters from "../components/Filters";
import ImageList from "../components/ImageList";

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
      <Page title="Gallery" fullWidth>
        <Layout>
          <Layout.Section>
            <ImageList
              handleUpdateAllLabels={this.handleUpdateAllLabels}
              activeFilters={activeFilters}
            />
          </Layout.Section>
          <Layout.Section secondary>
            <Filters
              uniqueLabels={uniqueLabels}
              handleUpdateFilters={this.handleUpdateFilters}
            />
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

export default Main;
