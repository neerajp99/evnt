import styled from "styled-components";
import React from "react";

export const Sidebar = styled.div`
  background: rgb(255, 255, 255);
  flex-grow: 0.5;
  flex-basis: 100%
  order: 1;
  border-right: 0.5px solid rgb(228, 229, 233);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  min-width: 20%;
  box-sizing: border-box;
  /* position: fixed; */
  max-height: 100%;
  overflow: hidden;
  @media (max-width: 768px) {
    visibility: hidden;
    display: none;
  }
  @media (max-width: 1028px) {
    min-width: 25%;
  }
`;

export const DashboardList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 8%;
`;
export const DashboardListItem = styled.li`
  width: auto;
  height: 3vh;
  /* background: red; */
  list-style: none;
  text-decoration: none;
  color: #787676;
  font-family: Lato, sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 10px;
  margin-top: 10%;
  letter-spacing: 0.07rem;
  border-right:  5px solid #fff;
  display: flex;
  flex-direction: row;
  transition: 0.4s all ease-in-out;
  -webkit-transition: 0.4s all ease-in-out;
  -mozkit-transition: 0.4s all ease-in-out;
  &:hover {
    color: #4ca1ff;
    border-right: 5px solid #4ca1ff;
    transition: 0.4s all ease-in-out;
    -webkit-transition: 0.4s all ease-in-out;
    -mozkit-transition: 0.4s all ease-in-out;
  }
`;

export const LogoContainer = styled.div`
  height: 15vh;
  width: 100%;
  background: #4ca1ff;
`;

export const DashboardListIcon = styled.div`
  flex-grow: 1;
  min-width: 20%;
  max-width: 20%;
`;

export const DashboardListContent = styled.div`
  flex-grow: 4;
  text-align: left;
  /* color: #3d3d3d; */
`;

export const DashboardBottom = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 60%;
`;
