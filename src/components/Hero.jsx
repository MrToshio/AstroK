import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/logo-big.png";

const float = keyframes`
  50% {
    transform: translate(0, 20px);
  }
`;

const StyledHero = styled.header`
  width: 90%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  color: ${(props) => props.theme.black};
  position: relative;
  margin-top: 60px;

  @media (max-width: 899px) {
    display: block;
    height: fit-content;
  }

  img {
    width: 35vw;
    height: auto;
    animation: ${float} 3s ease-out infinite;
    z-index: 80;
    position: relative;
    @media (max-width: 899px) {
      width: 70vw;
    }
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    padding: 12px 32px;
    z-index: 80;
    position: relative;
  }
  .left {
  }
  .right {
    padding: 32px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    box-shadow: 0 31px 35px rgb(0 0 0 / 10%);
    position: relative;
    z-index: 80;

    h1 {
      z-index: 80;
      position: relative;
      font-size: 40px;
      font-weight: 800;
    }
  }
`;

export function Hero() {
  return (
    <>
      <StyledHero>
        <div className="left">
          <img src={logo} alt="AstroPepe-logo" />
        </div>
        <div className="right">
          <h1>Welcome to Pepeclipse</h1>
          <p>
            We are tired of all the scams that happen among tokens. So we
            decided to take matters into our own hands. That's why we created
            Pepeclipse, with the intention of being 100% safe from rug pulls.
            How? Because we, the devs have no rugs to pull. This token is for
            you, let's moon.
          </p>
        </div>
      </StyledHero>
    </>
  );
}
