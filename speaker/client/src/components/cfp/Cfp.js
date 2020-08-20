import React, { Component } from "react";
import { Link } from "react-router-dom";
import Side from "../sidebar/Sidebar";
import { Container, InnerContainer } from "../../styles/Commons";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  CfpTop,
  CfpBottom,
  CfpDetailsLeft,
  CfpDetailsRight,
  CfpDescription,
  DottedCircle,
  EventTitle,
  EventDescription
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
  return (
    <Container>
      <Side />
      <InnerContainer>
        <CfpDescription>
          <CfpTop>
            <DottedCircle> </DottedCircle>
            <EventTitle> PyCon France 2021</EventTitle>
            <EventDescription>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, urna
              consequat felis vehicula class ultricies mollis dictumst, aenean
              non a in donec nulla. Phasellus ante pellentesque erat cum risus
              consequat imperdiet aliquam, integer placerat et turpis mi eros
              nec lobortis taciti, vehicula nisl litora tellus ligula porttitor
              metus.{" "}
            </EventDescription>
          </CfpTop>
          <CfpBottom>
            <CfpDetailsLeft>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    alalalalalalalaa
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>i am neeraj</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    alalalalalalalaa
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>i am neeraj</Typography>
                </AccordionDetails>
              </Accordion>


              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    alalalalalalalaa
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>i am neeraj</Typography>
                </AccordionDetails>
              </Accordion>
            </CfpDetailsLeft>
            <CfpDetailsRight>
            
            </CfpDetailsRight>
          </CfpBottom>
        </CfpDescription>
      </InnerContainer>
    </Container>
  );
}

export default Cfp;
