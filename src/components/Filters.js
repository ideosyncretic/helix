import React, { Component } from "react";
import { Card, OptionList } from "@shopify/polaris";

class Filters extends Component {
  state = {
    selected: [],
  };

  render() {
    return (
      <Card>
        <OptionList
          title="Filter by"
          onChange={updated => {
            this.setState({ selected: updated });
          }}
          options={[
            { value: "people", label: "People" },
            { value: "plants", label: "Plants" },
            { value: "chairs", label: "Chairs" },
            { value: "windows", label: "Windows" },
          ]}
          selected={this.state.selected}
          allowMultiple
        />
      </Card>
    );
  }
}

export default Filters;
