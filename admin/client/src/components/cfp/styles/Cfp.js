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
  @media (max-width: 1100px) {
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
  justify-content: space-between;
  margin-left: -15px;
  @media (max-width: 1100px) {
    flex-direction: column;
    margin-left: 0px;
  }
`;

export const CfpContainerBottomContainer = styled.div`
  position: relative;
  top: 4%;
  height: 93%;
  /* flex-grow: 1; */
  width: 29%;
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
  height: 21%;
  background: #fff;
  position: relative;
  margin: 0 auto;
  border-radius: 12px;
  margin-bottom: 5%;
  /* top: 4%; */
  /* z-index: 5; */
  /* background-color: ${props => (props.isDragging ? "red" : "white")}; */
  transition: background-color 0.3s ease;
  cursor: grab !important;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
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
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${props => (props.isDraggingOver ? "#e6e9ed" : "#ebeff3")};
  transition: background-color 0.3s ease;
  @media (max-width: 1100px) {
    padding: 0px;
  }
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

export const TalkStatus = styled.div`
  background: ${props => (props.isOpen ? "#bdccf3" : "#fae4e3")};
  position: absolute;
  left: 4%;
  top: 7%;
  font-family: Lato;
  text-transform: uppercase;
  font-size: 12.5px;
  padding: 3px 6px 2px;
  color: ${props => (props.isOpen ? "#7690d9" : "#d0696f")};
  font-weight: 700;
  letter-spacing: 0.1rem;
`;

export const TalkTitle = styled.div`
  position: absolute;
  top: 32%;
  font-family: Lato;
  left: 4%;
  color: #616e76;
  text-align: left;
`;

export const SpeakerContent = styled.div`
  position: absolute;
  top: 70%;
  left: 4%;
  display: inline-block;
`;

export const SpeakerTag = styled.div`
  display: inline-block;
  background: #e5f1f4;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  font-family: Lato;
  font-size: 15px;
  line-height: 30px;
  color: #35c6d2;
`;

export const SpeakerName = styled.div`
  display: inline-block;
  position: relative;
  left: 12%;
  color: #8198a5;
  font-size: 15px;
  font-family: Lato;
`;

export const TalkModal = styled.div`
  position: absolute;
  display: inline-block;
  height: 20px;
  width: 20px;
  right: 1%;
  top: 73%;
  cursor: pointer;
  span {
    margin-bottom: 0.2rem;
    background: #a9b2bd;
    height: 3px;
    width: 15%;
    display: block;
    border-radius: 100%;
  }
`;

export const TalkDetails = styled.div`
  width: 85%;
  min-height: 50%;
  height: auto;
  /* background: red; */
  position: relative;
  top: 10%;
  left: 4%;
`;

export const TalkHeading = styled.div`
  color: #56585f;
  font-family: Lato;
  font-size: 30px;
  font-weight: 700;
  text-align: left;
`;

export const TalkDescription = styled.div`
  position: relative;
  color: #81869a;
  margin-top: 3%;
  font-family: Lato;
  text-align: left;
`;

export const TalkTags = styled.div`
  margin-top: 4%;
  display: inline-block;
  width: 95%;
  margin-left: -3%;
`;

export const TalkTag = styled.div`
  display: inline-block;
  margin-left: 3%;
  background-color: ${props => (props.index % 2 == 0 ? "#e9f2fe" : "#fff6ec")};
  color: ${props => (props.index % 2 === 0 ? "#749ad4" : "#c9977c")};
  padding: 6px 17px 6px;
  margin-top: 1.5%;
  font-size: 14px;
`;

export const TalkActivity = styled.div`
  min-height: 30%;
  width: 96%;
  /* background: tomato; */
  position: relative;
  top: 15%;
  left: 4%;
  margin-bottom: 5%;
`;

export const TalkActivityTopContainer = styled.div`
  position: relative;
  height: 50px;
  width: 40%;
  display: inline-block;
`;

export const TalkActivityIcon = styled.div`
  display: inline-block;
  color: #55575f;
`;

export const TalkActivityHeading = styled.div`
  display: inline-block;
  position: relative;
  left: 3%;
  font-size: 18px;
  font-weight: 600;
  color: #66686f;
  top: 3%;
  font-family: Lato;
`;

export const TalkActivityFlex = styled.div`
  display: flex;
  /* grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr)); */
  min-height: 60vh;
  height: auto;
  width: 100%;
  flex-direction: row;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const TalkComments = styled.div`
  /* background: blue; */
  flex: 0 1 auto;
  width: 60%;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const TalkOtherDetails = styled.div`
  background: #e6e9ed;
  flex: 1 1 auto;
  width: 40%;
  height: 70vh;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const CommentInputField = styled.textarea`
  border: 1px solid rgba(9, 30, 66, 0.04);
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
  height: 12vh;
  width: 80%;
  position: relative;
  left: 8%;
  font-family: Lato;
  padding: 15px;
  font-size: 15px;
  -webkit-letter-spacing: 0.03rem;
  -moz-letter-spacing: 0.03rem;
  -ms-letter-spacing: 0.03rem;
  letter-spacing: 0.03rem;
  color: #55575f;
  border-radius: 16px;
  background: rgba(9, 30, 66, 0.04);
  &:focus {
    border: 1.4px solid #4595ece3;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c1c3c7;
  }
  :-ms-input-placeholder {
    color: #c1c3c7;
  }
`;

export const CommentAuthorIcon = styled.div`
  background: #e6f1f4;
  position: absolute;
  padding: 10px;
  border-radius: 100%;
  color: #33b8c3;
  font-weight: 700;
  font-family: Lato;
`;

export const CommentButtons = styled.div`
  position: relative;
  left: 8%;
  display: inline-block;
  width: 81%;
  padding: 10px;
`;

export const CommentButton = styled.button`
  background: #4abec9;
  display: inline-block;
  float: right;
  margin-left: 4%;
  padding: 12px;
  border-radius: 8px;
  color: #fff;
  font-family: Lato;
  font-weight: 600;
  letter-spacing: 0.02rem;
  border: none;
  text-decoration: none;
  min-width: 75px;
  &:nth-child(1) {
    background: #d0696f !important;
  }
  &:focus {
      border-radius: border-radius: 8px;
      border: none;
      outline: none;
  }
`;

export const OtherComments = styled.div`
  width: 90%;
  position: relative;
  min-height: 25vh;
  top: 5%;
  height: auto;
`;

export const CommentHeader = styled.div`
  height: 6vh;
  width: 100%;
  /* background: red; */
  display: inline-block;
`;

export const CommentContent = styled.div`
  position: relative;
  &:after {
  }
`;

export const CommentAuthorName = styled.div`
  display: inline-block;
  position: relative;
  left: 10%;
  line-height: 2.5;
  font-size: 17px;
  font-weight: 500;
  color: #5a5d63;
`;

export const CommentAgo = styled.div`
  display: inline-block;
  position: relative;
  left: 15%;
  font-family: Lato;
  line-height: 2.5;
  font-weight: 400;
  font-size: 14px;
  color: #97a2ad;
`;

export const CommentApprove = styled.div`
  display: inline-block;
  position: absolute;
  right: 4%;
  line-height: 2.7;
  /* color: #97a2ac; */
  color: #d0696f;
`;

export const TopHr = styled.hr`
  width: 100%;
  position: relative;
  margin-bottom: 5%;
  top: 5%;
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ced0d7c9;
  /* margin: 1em 0; */
  padding: 0;
  left: -1%;
`;

export const CommentParagraph = styled.p`
  width: 90%;
  position: relative;
  top: 3%;
  left: 10%;
  text-align: left;
  font-size: 15px;
  color: #555967;
  font-family: Lato;
`;

export const CommentTool = styled.div`
  width: 100%;
  position: relative;
`;

export const ReplyButton = styled.button`
  position: absolute;
  right: 1%;
  width: 100px;
  height: 35px;
  font-size: 14px;
  font-family: Lato;
  letter-spacing: 0.02rem;
  color: ${props => (!props.visible ? "#a2acb6" : "#fff")};
  background: ${props => (!props.visible ? "transparent" : "#d0696f")};
  border: ${props =>
    !props.visible ? "1px solid #a2acb6" : "1px solid #d0696f"};
  border-radius: 7px;
  &:focus {
    /* border: none; */
    outline: none;
    border-radius: 7px;
  }
`;
export const CommentReply = styled.div`
  position: relative;
  left: 10%;
  width: 90%;
  /* background: #ccc; */
  margin-top: 8vh;
  opacity: 0;
  max-height: 0;
  overflow-y: hidden;
  transition: 0.4s all ease;
`;
