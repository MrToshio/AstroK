import React from "react";
import styled from "styled-components";
import Sky from "react-sky";
import { Hero } from "./Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faRecycle,
  faFire,
  faMoneyBill,
  faUser,
  faCheck,
  faHourglass,
} from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "../style/commonStyled";
import locker from "../assets/locker.png";
import coin from "../assets/coin.png";
import community from "../assets/community.png";
import liquidityPool from "../assets/liquiditypool.png";
import ship from "../assets/space-ship.png";
import rocket from "../assets/rocket.png";
import pumpDump from "../assets/pump-dump.png";
import managerNFT from "../assets/nft-manager.jpg";
import designerNFT from "../assets/nft-designer.jpg";
import devNFT from "../assets/nft-dev.jpg";

const StyledDashboard = styled.div`
  background: rgb(222, 168, 218);
  background: linear-gradient(
    135deg,
    rgba(161, 209, 224, 0.2) 20%,
    rgba(222, 168, 218, 0.2) 80%
  );
  position: relative;
  overflow: hidden;
  #sky {
    z-index: 60 !important;
    transform: scale(2);
  }
`;

const StyledGrid = styled.div`
  @media (max-width: 899px) {
    display: flex;
    flex-direction: column;
  }

  > div,
  article {
    background: rgba(255, 255, 255, 0.96);
    border-radius: 16px;
    box-shadow: 0 31px 35px rgb(0 0 0 / 10%);
  }
`;

const StyledArticle = styled.article`
  position: relative;
  z-index: 80;
  min-height: 200px;
  max-height: 591px;
  border-radius: 16px;
  padding: 24px;

  @media (max-width: 899px) {
    max-height: unset;
  }

  h4 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.black};
    line-height: 1.2;

    small {
      color: ${(props) => props.theme.black};
      font-size: 12px;
      font-weight: 400;
      padding-left: 10px;
      letter-spacing: 1px;
    }
  }

  p {
    color: ${(props) => props.theme.black};
    font-size: 14px;
    margin-top: 30px;
  }

  .flex,
  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }

  .flex {
    margin-bottom: 13px;
  }

  .iconContainer {
    width: 22px;
    height: 22px;
    border-radius: 5px;
    background: rgba(161, 209, 224, 0.2);
    border: 2px solid rgb(161, 209, 224);
    text-align: center;
    float: left;
    font-size: 12px;
    line-height: 18px;
    margin-right: 10px;
    color: ${(props) => props.theme.black};
  }

  .left {
    color: ${(props) => props.theme.black};
    font-weight: 600;
  }
  .right {
    color: ${(props) => props.theme.black};
    font-size: 12px;
  }

  .bolder {
    font-weight: 700;
    color: ${(props) => props.theme.black};
    display: block;
  }
`;

const StyledTokenomics = styled(StyledArticle)`
  padding: 60px 24px 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  @media (max-width: 899px) {
    position: relative;
  }

  .tokenomics {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 10px 0;

    @media (max-width: 899px) {
      padding-bottom: 100px;
      flex-direction: column;
    }

    .badge {
      flex: 1;
      border-radius: 100px;
      background: rgb(222, 168, 218);
      background: linear-gradient(
        90deg,
        rgba(222, 168, 218, 0.96) 20%,
        rgba(161, 209, 224, 0.96) 80%
      );
      color: ${(props) => props.theme.background};
      margin: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 18px;
      height: 50px;
      max-width: 280px;
      box-shadow: 0 31px 35px rgb(0 0 0 / 5%);

      @media (max-width: 899px) {
        max-width: unset;
        margin: 12px 42px;
      }
    }

    .iconomic {
      font-size: 20px;
      color: ${(props) => props.theme.background};
    }

    .left {
      color: ${(props) => props.theme.background};
      margin-right: 20px;
    }
    .right {
      font-weight: 600;
      color: ${(props) => props.theme.background};
    }
  }
`;

const StyledFeatures = styled(StyledArticle)`
  grid-column: 1/4;
  grid-row: 1/3;
  max-height: unset;
  background-color: transparent !important;
  box-shadow: none !important;

  h4 {
    font-size: 30px;
    margin-bottom: 30px;

    small {
      font-size: 20px;
      margin-left: 12px;
    }
  }

  .flexContent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 25px;
    margin: 0 40px;

    @media (max-width: 899px) {
      display: flex;
      flex-direction: column;
      margin: 0;
    }
  }

  .items {
    padding: 20px;
    text-align: center;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 31px 35px rgb(0 0 0 / 10%);

    @media (max-width: 899px) {
      min-height: unset;
      margin: 0;
      margin-bottom: 15px;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    color: ${(props) => props.theme.black};
    line-height: 1.2;

    small {
      margin-left: 8px;
      font-size: 60%;
      font-weight: 400;
    }
  }

  img {
    width: 150px;
    height: auto;
  }

  button {
    margin-top: 40px;
  }
`;

export const StyledNftSection = styled.section`
  margin: 140px 0 0;
  padding: 24px;
  color: ${(props) => props.theme.black};
  h4 {
    font-size: 30px;
    margin-bottom: 30px;
    small {
      font-size: 20px;
      margin-left: 12px;
    }
  }
`;

const StyledNFT = styled(StyledArticle)`
  display: flex;
  margin: 0 40px;
  @media (max-width: 899px) {
    flex-direction: column;
    margin: 0;
  }
  .NFT {
    padding: 24px 12px;
    margin: 0 12px;
    @media (max-width: 899px) {
      padding: 28px 12px;
      border-bottom: 1px solid ${(props) => props.theme.border};
      &:last-of-type {
        border-bottom: none;
      }
    }
    a {
      color: #7bbddf;
      font-weight: 600;
    }
    img {
      width: 100%;
      border-radius: 12px;
      transition: 0.15s ease-out;
      &:hover {
        transform: scale(1.02);
      }
    }
  }
`;

const StyledRoadMap = styled(StyledArticle)`
  background-color: transparent !important;
  box-shadow: none !important;
  padding: 160px 32px;
  max-height: unset;

  .roadmap {
    max-width: fit-content;
    margin: 0 auto;
    padding: 60px 0;
  }

  .row {
    display: flex;
    justify-content: start;
    align-items: center;
    padding-bottom: 18px;
    border-left: 2px solid #ccc;

    &:last-of-type {
      border-left: none;
      position: relative;
      left: 2px;
    }
  }

  .icon {
    font-size: 12px;
    width: 26px;
    height: 26px;
    border-radius: 26px;
    text-align: center;
    color: ${(props) => props.theme.black};
    margin-right: 16px;
    position: relative;
    top: -9px;
    left: -14px;
    z-index: 2;

    @media (max-width: 899px) {
      margin-right: 0px;
    }

    svg {
      position: relative;
      top: 2px;
    }
  }

  .complete {
    background: #d8f5ce;
    border: 2px solid rgb(71, 171, 93);
  }

  .pending {
    background: #ffd1a3;
    border: 2px solid rgb(238, 141, 43);
  }

  .notComplete {
    background: #f0f0f0;
    border: 2px solid #ccc;
  }

  .text {
    color: ${(props) => props.theme.black};
    font-size: 16px;
    font-weight: 600;
    margin-top: -10px;
    padding-bottom: 6px;

    @media (max-width: 899px) {
      font-size: 13px;
    }

    span {
      margin-left: 8px;
      color: rgb(71, 171, 93);
      font-size: 80%;
    }

    .orange {
      color: rgb(238, 141, 43);
    }
  }

  h4 {
    font-size: 30px;
    margin-bottom: 30px;

    small {
      font-size: 20px;
      margin-left: 12px;
    }
  }
`;

export function Dashboard() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <StyledDashboard>
        <Sky
          images={{
            0: ship,
            1: rocket,
          }}
          how={20}
          time={20}
          size={"50px"}
        />
        <Hero />
        <StyledTokenomics>
          <div className="tokenomics">
            <div className="badge">
              <div className="left">
                <div className="iconomic">
                  <FontAwesomeIcon icon={faCoins} />
                </div>
              </div>
              <div className="right">
                <div>Max Supply</div>
                100,000,000,000,000
              </div>
            </div>
            <div className="badge">
              <div className="left">
                <div className="iconomic">
                  <FontAwesomeIcon icon={faRecycle} />
                </div>
              </div>
              <div className="right">
                <div>Circulating</div>
                70,000,000,000,000
              </div>
            </div>
            <div className="badge">
              <div className="left">
                <div className="iconomic">
                  <FontAwesomeIcon icon={faFire} />
                </div>
              </div>
              <div className="right">
                <div>Burned</div>
                30,000,000,000,000
              </div>
            </div>
            <div className="badge">
              <div className="left">
                <div className="iconomic">
                  <FontAwesomeIcon icon={faMoneyBill} />
                </div>
              </div>
              <div className="right">
                <div>Marketcap</div>
                $0
              </div>
            </div>
            <div className="badge">
              <div className="left">
                <div className="iconomic">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
              <div className="right">
                <div>Holders</div>0
              </div>
            </div>
          </div>
        </StyledTokenomics>
        <StyledGrid>
          <StyledFeatures>
            <h4>
              Features
              <small>Reasons why to own PepEclipse</small>
            </h4>
            <div className="flexContent">
              <div className="items one">
                <img src={locker} alt="" />
                <h3>Highly Secured</h3>
                <p>
                  All initial liquidity provided has been locked during presale
                  DXSale. The contract owner will be renounced at the end of the
                  presale, leaving the contract trustless for the PepEclipse
                  community.
                </p>
              </div>
              <div className="items two">
                <img src={coin} alt="" />
                <h3>RFI Static Rewards</h3>
                <p>
                  5% of every transaction will be reinvested into the growth of
                  the project. Either by ads or by rebuying token for CEX
                  listing
                </p>
              </div>
              <div className="items">
                <img src={community} alt="" />
                <h3>Fair Launch & Community Built</h3>
                <p>
                  Community driven & fair launch. There is a pre-sale on DxSale.
                  Dev will participate in the fair launch with everyone else.
                </p>
              </div>
              <div className="items">
                <img src={pumpDump} alt="" />
                <h3>Anti Pump-Dump-Exist Whales</h3>
                <p>
                  Whale cannot exit without redistribution of tokens to holders!
                </p>
              </div>
              <div className="items">
                <h3>
                  Audit by solidity.finance
                  <small>Coming soon</small>
                </h3>
                <p>
                  <i>
                    "The audit will be started once ownership is renounced after
                    the pre-sale!"
                  </i>
                  <span className="bolder">- Soon™ </span>
                </p>
                <a href="https://solidity.finance/">
                  <StyledButton>Read more about them</StyledButton>
                </a>
              </div>
            </div>
          </StyledFeatures>

          <StyledRoadMap>
            <h4>
              Roadmap
              <small>Trace our work</small>
            </h4>
            <div className="roadmap">
              <div className="row">
                <div className="icon complete">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="text">
                  Presale live on DXSales <span className="orange">Done</span>
                </div>
              </div>
              <div className="row">
                <div className="icon notComplete">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="text">Listing on PANCAKESWAP </div>
              </div>
              <div className="row">
                <div className="icon notComplete"></div>
                <div className="text">Marketing on Poocoin </div>
              </div>
              <div className="row">
                <div className="icon notComplete"></div>
                <div className="text">Reach 10000 holders </div>
              </div>
              <div className="row">
                <div className="icon notComplete"></div>
                <div className="text">Audit PepEclipse Smart Contract </div>
              </div>
              <div className="row">
                <div className="icon notComplete"></div>
                <div className="text">Reach 30000 holders </div>
              </div>
              <div className="row">
                <div className="icon notComplete"></div>
                <div className="text">Launch holder contest ($1000) </div>
              </div>
              <div className="row">
                <div className="icon notComplete" />
                <div className="text">Reach 50000 holders</div>
              </div>
              <div className="row">
                <div className="icon notComplete" />
                <div className="text">Launch second holder contest ($2000)</div>
              </div>
              <div className="row">
                <div className="icon notComplete" />
                <div className="text">Listing on Exchange</div>
              </div>
              <div className="row">
                <div className="icon notComplete" />
                <div className="text">CoinmarketCap & Coingecko Listing</div>
              </div>
              <div className="row">
                <div className="icon notComplete" />
                <div className="text">Listing on major Exchange</div>
              </div>
            </div>
          </StyledRoadMap>
        </StyledGrid>
      </StyledDashboard>
    </div>
  );
}
