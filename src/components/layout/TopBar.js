import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo_medium_dark.jpg";
import { Box } from "@rebass/grid";

const TopBar = () => {
  return (
    <StyledTopBar>
      <Box ml={2}>
        <Logo />
      </Box>
    </StyledTopBar>
  );
};

const Logo = () => {
  return <img src={logo} alt="Helix Logo" width="124px" />;
};

const StyledTopBar = styled.div`
  display: flex;
  width: 100vw;
  height: 56px;
  align-items: center;
  background: #000000;
`;

export default TopBar;
