import styled from "styled-components";

export const CfpContainer = styled.div`
  margin: 0 auto;
  width: 97%;
  height: 96%;
  /* background: #fff; */
  position: relative;
  top: 2%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 768px) {
    overflow-y: auto;
    /* margin-left: -0.3%; */
  }
`;

export const CfpContainerTop = styled.div`
  height: 10%;
  flex: 0 1 auto;
  background: #ebeff3;
  border-radius: 14px;
  overflow: hidden;
`;

export const CfpContainerBottom = styled.div`
  height: 88%;
  flex: 1 1 auto;
  width: 100%;
  /* background: blue; */
  /* overflow: auto; */
  display: flex;
  justify-content: space-around;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const CfpContainerBottomContainer = styled.div`
  position: relative;
  top: 4%;
  height: 93%;
  /* flex-grow: 1; */
  width: 30%;
  margin: 0 auto;
  border-radius: 10px;
  /* overflow-y: auto; */
  /* padding-bottom: 2%; */
  @media (max-width: 1100px) {
    width: 100%;
    height: 100vh;
    position: relative;
    top: 3%;
    margin-top: 10%;
  }
`;

export const CfpListContainer = styled.div`
  display: block;
  width: 100%;
  height: 17%;
  background: #fff;
  position: relative;
  margin: 0 auto;
  border-radius: 12px;
  margin-bottom: 5%;
  /* top: 4%; */
  /* z-index: 5; */
  /* background-color: ${props => (props.isDragging ? "red" : "white")} */
`;

export const CfpList = styled.div`
  display: block;
  height: inherit;
  width: 100%;
  /* background: #fff; */
  position: relative;
  margin: 0 auto;
  border-radius: 12px;
  margin-bottom: 5%;
  top: 2%;
  overflow: auto;
  background: #ebeff3;
  padding-top: 6%;
  padding-left: 10px;
  padding-right: 10px;
  /* background: ${props => (props.isDraggingOver ? "blue" : "#ebeff3")} */
`;

export const CfpHeader = styled.div`
  text-align: left;
  text-transform: uppercase;
  position: relative;
  left: 2%;
  font-family: Lato;
  font-weight: 700;
  color: #9fa4a9;
`;
