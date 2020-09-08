import styled from "styled-components";

export const MyTalkContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  /* background: tomato; */
  margin-bottom: 10%;
`;

export const MyTalkHeading = styled.h1`
  font-size: calc(1.2em + 1.5vw);
  margin-top: 4%;
  position: relative;
  text-align: left;
  font-family: Lato;
  font-weight: 400;
  color: #22343b;
  margin-bottom: 4%;
  @media (max-width: 768px) {
    margin-bottom: 10%;
    margin-top: 10%;
  }
`;

export const TalkContainer = styled.div`
  min-height: 35%;
  height: auto;
  width: 90%;
  background: #fff;
  border-radius: 14px;
  ${'' /* border-left: 12px solid #4ca1ff;  */}
  margin-top: 3%;
  padding: 10px;
  margin-bottom: 3%;

  transition: 0.3s all ease-in-out;
  -moz-transition: 0.3s all ease-in-out;
  -webkit-transition: 0.3s all ease-in-out;
  &:hover {
    transition: 0.3s all ease-in-out;
    -moz-transition: 0.3s all ease-in-out;
    -webkit-transition: 0.3s all ease-in-out;
    transform: translateY(-4px);
    /* border: none; */
  }
  @media (max-width: 768px) {
    width: 94%;
  }
`;
export const TalkHeading = styled.div`
  color: #56585f;
  font-family: Lato;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  width: 95%;
  position: relative;
  margin: 0 auto;
  margin-top: 2%;
  @media (max-width: 768px) {
    margin-top: 4%;
    font-size: 18px;
  }
`;

export const TalkDescription = styled.div`
  position: relative;
  color: #81869a;
  margin-top: 3%;
  font-family: Lato;
  text-align: left;
  width: 95%;
  margin: 0 auto;
  margin-top: 2%;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 3%;
  }
`;
export const TalkTags = styled.div`
  /* margin-top: 4%; */
  display: inline-block;
  width: 95%;
  margin: 0 auto;
  position: relative;
  margin-top: 3%;
`;

export const TalkTag = styled.div`
  display: inline-block;
  margin-left: 3%;
  background-color: ${props => (props.index % 2 === 0 ? "#e9f2fe" : "#fff6ec")};
  color: ${props => (props.index % 2 === 0 ? "#749ad4" : "#c9977c")};
  padding: 6px 17px 6px;
  margin-top: 1.5%;
  font-size: 14px;
`;

export const NullInfo = styled.h3`
  font-family: "Lato";
  font-size: 20px;
  font-weight: 400;
  color: #4e4e5a;
`;

export const TalkUpdateButton = styled.div`
    margin-top: 5%;
    position: relative;
    background: #4ca1ff;
    font-weight: 500;
    padding: 5px;
    border: none;
    width: 14%;
    height: 3.7vh;
    margin-bottom: 4%;
    margin-left: 3%;
    text-align: center;
    line-height: 3.7vh;
    color: #fff;
    font-size: 0.9rem;
    cursor: pointer;
    @media(max-width: 768px){
      width: 92%;
      margin-top: 10%;
      border-radius: 5px;
}
    }
`