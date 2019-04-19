import React, { Component } from "react";
import { Card, OptionList } from "@shopify/polaris";

class Filters extends Component {
  state = {
    selected: [],
  };

  render() {
    const { uniqueLabels, handleUpdateFilters } = this.props;
    const options = uniqueLabels.map(label => {
      return {
        value: label,
        label: label,
      };
    });
    return (
      <Card>
        <OptionList
          title="Filter by"
          onChange={updatedSelection => {
            this.setState({ selected: updatedSelection }, () =>
              handleUpdateFilters(updatedSelection),
            );
          }}
          options={options}
          selected={this.state.selected}
          allowMultiple
        />
      </Card>
    );
  }
}

export default Filters;
