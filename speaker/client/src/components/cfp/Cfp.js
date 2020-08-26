import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Side from "../sidebar/Sidebar";
import { Container, InnerContainer } from "../../styles/Commons";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import { getCfpDetails } from "../../actions/cfpActions.js";
import PropTypes from "prop-types";
import Spin from "../../util/Spinner";

import {
  CfpTop,
  CfpBottom,
  CfpDetailsLeft,
  CfpDetailsRight,
  CfpDescription,
  DottedCircle,
  EventTitle,
  EventDescription,
  CfpOtherDetails,
  CfpList,
  CfpListItem,
  CfpItemSpan,
  CfpButton
} from "./styles/Cfp";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function Cfp(props) {
  const classes = useStyles();

  const [cfpDetails, setCfpDetails] = useState(null);
  const [eventBeginDate, setEventBeginDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [totalSpeakers, setTotalSpeaker] = useState(30);
  const [eventVenue, setEventVenue] = useState("");
  const [eventCodeOfConduct, setEventCodeOfConduct] = useState("");
  const [cfpDescription, setCfpDescription] = useState("");
  const [cfpNotes, setCfpNotes] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [travelAssistancePolicy, setTravelAssistancePolicy] = useState("");
  const [eventWebsite, setEventWebsite] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      if (props.cfpDetails.cfpDetails !== null) {
        if (props.cfpDetails.cfpDetails) {
          const { cfpDetails } = props.cfpDetails;
          console.log(cfpDetails[0]);
          setCfpDetails(cfpDetails[0]);
          setCfpDescription(cfpDetails[0].cfpDescription);
          setEventBeginDate(cfpDetails[0].eventBeginDate.slice(0, 10));
          setEventEndDate(cfpDetails[0].eventEndDate.slice(0, 10));
          setEventVenue(cfpDetails[0].eventVenue);
          setEventCodeOfConduct(cfpDetails[0].eventCodeOfConduct);
          setCfpNotes(cfpDetails[0].cfpNotes);
          setAdditionalDetails(cfpDetails[0].additionalDetails);
          setTravelAssistancePolicy(cfpDetails[0].travelAssistancePolicy);
          setEventWebsite(cfpDetails[0].eventWebsite);
          setLoading(false);
        }
      }
    },
    [props.cfpDetails]
  );

  const details = [
    "Event Code of Conduct",
    "Call for proposal description.",
    "Notes for Call for Proposals.",
    "Additional Details",
    "Travel Assistance Policy, if any."
  ];

  const detailsId = [
    eventCodeOfConduct,
    cfpDescription,
    cfpNotes,
    additionalDetails,
    travelAssistancePolicy
  ];

  const { getCfpDetails } = props;

  useEffect(
    () => {
      getCfpDetails();
    },
    [getCfpDetails]
  );

  const AccordionContent = details.map((item, key) => {
    return (
      <Accordion key={key}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{item}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{detailsId[key]}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <Container>
      <Side />
      <InnerContainer>
        {cfpDetails === null || loading ? (
          <Spin />
        ) : (
          <CfpDescription>
            <CfpTop>
              <DottedCircle> </DottedCircle>
              <EventTitle> PyCon France 2021</EventTitle>
              <EventDescription>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, urna
                Lorem ipsum dolor sit amet consectetur adipiscing elit, urna
                consequat felis vehicula class ultricies mollis dictumst, aenean
                non a in donec nulla. Phasellus ante pellentesque erat cum risus
                consequat imperdiet aliquam, integer placerat et turpis mi eros
                nec lobortis taciti, vehicula nisl litora tellus ligula
                porttitor metus. Phasellus ante pellentesque erat cum risus
                consequat imperdiet aliquam, integer placerat et turpis mi eros
                nec lobortis taciti, vehicula nisl litora tellus ligula
                porttitor consequat felis vehicula class ultricies mollis
                dictumst, aenean non a in donec nulla. Phasellus ante
                pellentesque erat cum risus consequat imperdiet aliquam, integer
                placerat et turpis mi eros nec lobortis taciti, vehicula nisl
                litora tellus ligula porttitor metus. Phasellus ante
                pellentesque erat cum risus consequat imperdiet aliquam, integer
                placerat et turpis mi eros nec lobortis taciti, vehicula nisl
                litora tellus ligula porttitor{" "}
              </EventDescription>
            </CfpTop>
            <CfpBottom>
              <CfpDetailsLeft>{AccordionContent}</CfpDetailsLeft>
              <CfpDetailsRight>
                <CfpOtherDetails>
                  <CfpList>
                    <CfpListItem style={{ fontSize: 50 }}>30+</CfpListItem>
                    <CfpItemSpan>Speakers</CfpItemSpan>

                    <CfpListItem>2{eventBeginDate}</CfpListItem>
                    <CfpItemSpan>Event Starts</CfpItemSpan>

                    <CfpListItem>{eventEndDate}</CfpListItem>
                    <CfpItemSpan>Event ends</CfpItemSpan>

                    <CfpListItem style={{ color: "#4ca1ff" }}>
                      {eventWebsite}
                    </CfpListItem>
                    <CfpItemSpan>Event Website</CfpItemSpan>

                    <CfpListItem>{eventVenue}</CfpListItem>
                    <CfpItemSpan>Event Venue</CfpItemSpan>

                    <CfpButton>Event →</CfpButton>
                  </CfpList>
                </CfpOtherDetails>
              </CfpDetailsRight>
            </CfpBottom>
          </CfpDescription>
        )}
      </InnerContainer>
    </Container>
  );
}

// Cfp.propTypes = {
//   getCfpDetails: PropTypes.func.isRequired,
// }

const mapStateToProps = state => ({
  cfpDetails: state.cfpDetails
});

export default connect(
  mapStateToProps,
  { getCfpDetails }
)(Cfp);
