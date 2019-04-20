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
      <StyledFilterCard title="Filters">
        <FilterMatchSelect activeFilters={activeFilters} />
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
      </StyledFilterCard>
    );
  }
}

const StyledFilterCard = styled.div`
  width: 100vw;
`;

export default Filters;

class FilterMatchSelect extends React.Component {
  state = {
    matching: "any",
  };

  handleChange = newValue => {
    this.setState({ selected: newValue });
  };

  render() {
    const { activeFilters } = this.props;
    const options = [
      { label: "Any", value: "any" },
      { label: "All", value: "all" },
    ];

    if (activeFilters && activeFilters.length > 0) {
      return (
        <Card title="Matching">
          <Select
            options={options}
            onChange={this.handleChange}
            value={this.state.selected}
          />
        </Card>
      );
    }

    return <Card title="Filter by" />;
  }
}
