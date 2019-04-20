import React, { Component } from "react";
import Select from "react-select";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";

import Card from "./layout/Card";

class FilterMatchSelect extends React.Component {
  state = {
    selected: { label: "any of", value: "any" },
  };

  handleChange = selectedOption => {
    this.setState({ selected: selectedOption }, () => {
      this.props.handleUpdateMatchMode(selectedOption.value);
    });
  };

  render() {
    const { activeFilters } = this.props;
    const options = [
      { label: "any of", value: "any" },
      { label: "all of", value: "all" },
    ];

    return (
      <Flex alignItems="center" mb={2}>
        {activeFilters && activeFilters.length > 0 ? (
          <React.Fragment>
            <Box pt={2} pb={2} pr={2}>
              <h3>Matching</h3>
            </Box>
            <Box width={100}>
              <Select
                options={options}
                onChange={this.handleChange}
                value={this.state.selected}
              />
            </Box>
          </React.Fragment>
        ) : (
          <Box pt={2} pb={2} pr={2}>
            <h3>Filter by</h3>
          </Box>
        )}
      </Flex>
    );
  }
}

class Filters extends Component {
  /*
    selected: {array} of option objects,
    matchMode: {string} "any" | "all"
  */
  state = {
    selected: [],
  };

  handleFilterSelect = selection => {
    const filters = selection.map(option => option.value);
    this.setState({ selected: selection }, () =>
      this.props.handleUpdateFilters(filters),
    );
  };

  render() {
    const { selected } = this.state;
    const { activeFilters, uniqueLabels, handleUpdateMatchMode } = this.props;
    const options = uniqueLabels.map(label => {
      return {
        value: label,
        label: label,
      };
    });

    return (
      <StyledFilterCard>
        <FilterMatchSelect
          activeFilters={activeFilters}
          handleUpdateMatchMode={handleUpdateMatchMode}
        />
        <Select
          isMulti
          defaultValue={[]}
          name="filters"
          value={selected}
          onChange={this.handleFilterSelect}
          options={options}
          placeholder="Select..."
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </StyledFilterCard>
    );
  }
}

const StyledFilterCard = styled(Box)`
  width: 100%;
  border-radius: 0;
  padding: 16px;
`;

export default Filters;
