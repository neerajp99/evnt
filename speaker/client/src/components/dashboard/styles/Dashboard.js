import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  //display: flex;
  //flex-direction: row;
`;

export const DashboardTop = styled.div`
  height: 25%;
  width: 90%;
  background: #4ca1ff;
  margin: 0 auto;
  margin-top: 3%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`;

export const DashboardBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  margin: 0 auto;
  //background: tomato;
  height: 65%;
  padding: 0;
  //justify-content: space-between;
  margin-bottom: 10%;
`;

export const DashboardBottomBox = styled.div`
  width: 90%;
  margin: 0 auto;
  width: 30%;
  background: #1f212a;
  // max-height: 45%;
  border-radius: 10px;
  margin-top: 4%;
  height: 46%;

  &:nth-child(4) {
    background: #faf6ac;
  }
  &:nth-child(5) {
    background: #eef1ff;
  }
  &:nth-child(6) {
    background: #faf6ac;
  }
`;

export const BottomFlex = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-wrap: wrap;
`;

export const Icon = styled.div`
  //background: red;
  height: 50px;
  width: 50px;
  padding: 10px;
  border-radius: 100%;
  position: relative;
  margin-top: 8%;
  margin-left: 8%;
  display: flex;
  text-align: center;
  justify-content: center;
  //margin-bottom: 24px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border-radius: 48px;
  &:nth-child(1) {
    background: #3c5ccf;
  }
`;

export const IconText = styled.p`
  width: 85%;
  margin: 0 auto;
  margin-top: 6%;
  /* margin-left: 3%; */
  font-family: lato;
  /* font-size: 1rem; */
  font-weight: 500;
  position: static;
  display: block;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0;
  color: #7f7f84;
`;

export const DashboardCount = styled.div`
    height: 14vh;
    width: 14vh;
    background: #fff;
    border-radius: 100%;
    margin: 0 auto;
    margin-top: 8%;
    color: ${props => props.color === "orange" ? "#ff9500" : "#4ca1ff"} ;
    text-align: center;
    line-height: 14vh;
    font-size: 2.8rem;
    font-family: Lato;
    font-weight: 600;
`

export const DashboardText = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 10%;
    text-align: center;
    letter-spacing: 0.05rem;
    color: ${props => props.color === "orange" ? "#ff9500" : "#4ca1ff"} !important;
    font-family: Lato;
    font-size: 1.4rem;
    font-weight: 600;
`

export const DashboardAvatar = styled.div`
    height: 20vh;
    width: 20vh;
    // position: absolute;
    margin-top: 2%;
    background: #fff;
    border-radius: 9999px;
    margin-left: 5%;
`

export const DashboardGreetings = styled.div`
    width: 40%;
    margin-left: 3%;
    font-family: Lato;
    align-items: center;
    line-height: 40px;
    font-size: 2.7rem;
    color: #fff;
    font-weight: 200 !important;
    margin-top: 6%;

`

export const DashboardButtons = styled.div`
  // background: #fff !important;
  width: 40%;
  height: 100%;
  // margin-top: 4%;
`

export const DashboardButton = styled.button`
  height: 7vh;
  width: 15vw;
  margin-top: 17%;
  margin-left: 20%;
  background: #fff;
  border: none;
  color: #4ca1ff;
  font-size: 1.2rem;

`
