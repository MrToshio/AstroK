import React from "react";
import styled from "styled-components";
import {
  StyledNotVisibleXS,
  StyledVisibleXS,
  StyledButton,
} from "../style/commonStyled";
import pancakeSvg from "../assets/pancake.svg";
import logo from "../assets/astro-logo.png";

const StyledHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.background};
  font-size: 22px;
  font-weight: bold;
  padding: 15px;
  width: 100%;
  color: ${(props) => props.theme.black};
  height: 60px;
  z-index: 200;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.border};

  .logo {
    width: 50px;
    height: auto;
  }
`;

const StyledLogoContainer = styled.div`
  span {
    margin-left: 8px;
    vertical-align: middle;
  }
`;

const StyledPancakeButton = styled(StyledButton)`
  &:hover {
    transform: translateY(-3px);
    transition-duration: 0.2s;
  }

  img {
    width: 18px;
    margin-right: 8px;
  }
`;

const StyledMenuButton = styled(StyledButton)`
  font-size: 13px;
  font-weight: 700;
  text-transform: none;
`;

export function Header({ onclick }) {
  return (
    <StyledHeaderContainer>
      <StyledLogoContainer>
        <img className="logo" src={logo} alt="lunar-eclipse-logo" />
        <span>Pepeclipse</span>
      </StyledLogoContainer>
      <StyledNotVisibleXS>
        <a href="https://pancakeswap.finance/swap?outputCurrency=0xAf65739577557405259C3332baCDf7568799FFB6">
          <StyledPancakeButton>
            <img src={pancakeSvg} alt="Pancakeswap" />
            Buy on PancakeSwap
          </StyledPancakeButton>
        </a>
      </StyledNotVisibleXS>
      <StyledVisibleXS>
        <StyledMenuButton onClick={onclick}>Menu</StyledMenuButton>
      </StyledVisibleXS>
    </StyledHeaderContainer>
  );
}
