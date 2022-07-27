import styled from "styled-components";
import React from "react";
import { ReactComponent as logoSVG } from "./assets/logo.svg";

const Logo = styled(logoSVG)`
  height: 40px;
  width: 270px;
  display: block;

  @media (max-width: 800px) {
    height: 33px;
    width: 222px;
  }
`;
const HeaderContainer = styled.header`
  background: #ffbccc;
  border: 2px solid #000;
  padding: 20px 40px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 100vw;
  position: fixed;
  z-index: 3;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <a href="/">
      <Logo title="Book Club Logo" />
    </a>
  </HeaderContainer>
);

export default Header;
