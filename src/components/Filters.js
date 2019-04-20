import React, { Component } from "react";
import Select from "react-select";
import styled from "styled-components";

import Card from "./layout/Card";

class Filters extends Component {
  /*
    selected: {array} of option objects,
    matchMode: {string} "any" | "all"
  */
  state = {
    selected: [],
    matchMode: "any",
  };

  handleChange = selection => {
    console.log(`Options selected:`, selection);
    const filters = selection.map(option => option.value);
    this.setState({ selected: selection }, () =>
      this.props.handleUpdateFilters(filters),
    );
  };

  render() {
    const { selected } = this.state;
    const { activeFilters, uniqueLabels } = this.props;
    const options = uniqueLabels.map(label => {
      return {
        value: label,
        label: label,
      };
    });

    return (
      <Card title="Filters">
        {activeFilters && activeFilters.length === 0 && (
          <Card title="Filter by" />
        )}
        {activeFilters && activeFilters.length > 0 && (
          <Card title="Matching">
            <FilterMatchSelect />
          </Card>
        )}
        <Card>
          <Select
            isMulti
            defaultValue={[]}
            name="filters"
            value={selected}
            onChange={this.handleChange}
            options={options}
            placeholder="Select..."
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </Card>
      </Card>
    );
  }
}

export default Filters;

class FilterMatchSelect extends React.Component {
  state = {
    matching: "any",
  };

  handleChange = newValue => {
    this.setState({ selected: newValue });
  };

  render() {
    const options = [
      { label: "Any", value: "any" },
      { label: "All", value: "all" },
    ];

    return (
      <Select
        label="Matching"
        options={options}
        onChange={this.handleChange}
        value={this.state.selected}
        labelInline={true}
      />
    );
  }
}
