import styled from "styled-components";

export const CfpTop = styled.div`
  height: 20%;
  width: 90%;
  margin: 0 auto;
  /* background: red; */
  position: relative;
  margin-top: 5%;
`;

export const CfpBottom = styled.div`
  min-height: 67%;
  width: 90%;
  margin: auto;
  /* position: relative; */
  margin-top: 3%;
  /* background: blue; */
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    min-width: 90%;
    height: 80%;
  }
`;

export const CfpDetailsLeft = styled.div`
  min-width: 75%;
  min-height: 100%;
  height: auto;
  /* background: blue; */
`;

export const CfpDetailsRight = styled.div`
  min-width: 25%;
  min-height: 100%;
  height: auto;
  /* background: green; */
`;

export const CfpDescription = styled.div`
  height: 100%;
  width: 100%;
`;

export const DottedCircle = styled.div`
  background: #4ca1ff;
  /* color: rgba(44,122,123,10); */
  position: absolute;
  padding: 0.5rem;
  /* font-size: 1rem; */
  font-weight: 600;
  border-radius: 9999px;
  margin-top: 0.8rem;
`;

export const EventDescription = styled.p`
  position: relative;
  left: 2.5rem;
  width: 80%;
  font-family: Lato;
  font-size: 1.15rem;
  color: #4c5465;
`;

export const EventTitle = styled.h3`
  position: relative;
  left: 2.5rem;
  width: 80%;
  font-family: Lato;
  font-size: 1.85rem;
  color: #394051;
`;
