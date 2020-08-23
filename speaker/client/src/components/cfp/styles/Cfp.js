import styled from "styled-components";

export const CfpTop = styled.div`
min-height: 20%;
width: 90%;
margin: 0 auto;
position: relative;
margin-top: 5%;
height: auto;
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
  margin-bottom: 7%;
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
  font-size: 1rem;
  color: #697281 !important;
  font-weight: 500;
  line-height: 1.5rem;
`;

export const EventTitle = styled.h3`
  position: relative;
  left: 2.5rem;
  width: 80%;
  font-family: Lato;
  font-size: 1.85rem;
  color: #394051;
`;

export const TextDot = styled.div`
  background: #319795;
  position: absolute;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 99999px;
  line-height: 100%;
  margin-top: 1%;
`;

export const CfpOtherDetails = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const CfpList = styled.ul`
  list-style: none;
  display: block;
`;

export const CfpListItem = styled.li`
  font-size: 16px;
  margin-top: 15%;
  font-family: Lato;
  font-weight: 600;
  color: #2e3748;
`;

export const CfpItemSpan = styled.div`
  margin-top: 5%;
  color: #828ba2;
  font-family: Lato;
  font-size: 16px;

`;

export const CfpButton = styled.button`
  height: 50px;
  width: 150px;
  background: #e4f1f9;
  margin-top: 15%;
  border: none;
  color: #4299e2;
  font-famiy: Lato;
  font-size: 1rem;
  font-weight: 600;
`;
