import React from "react";
import Lottie from "react-lottie";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import IconButton from "@material-ui/core/IconButton";

import integrationAnimation from "../src/animations/integrationAnimation/data.json";

import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid containter direction="column">
      <Grid item container direction="row" justify={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{ marginTop: matchesXS ? "1em" : "2em" }}>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
            <IconButton style={{ backgroundColor: "transparent" }} component={Link} href="/customsoftware" onClick={() => props.setSelectedIndex(1)}>
              <img src="/assets/backArrow.svg" alt="Back to Custom Software Development Page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
            </Typography>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton onClick={() => props.setSelectedIndex(3)} component={Link} href="/websites" style={{ backgroundColor: "transparent" }}>
              <img src="/assets/forwardArrow.svg" alt="Forward to Website Developmet Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item container direction={matchesSM ? "column" : "row"} style={{ marginTop: "15em", marginBottom: "15em" }} className={classes.rowContainer}>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
              Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.
            </Typography>
            <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
              This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} isStopped={true} style={{ maxWidth: "20em" }} />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography align={matchesSM ? "center" : "right"} variant="h4" gutterBottom>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>
              Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>
              This significantly reduces costs and creates a more unified brand experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{ marginBottom: "15em" }}>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/swissKinfe.svg" alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
          item
          container
          alignItems="center"
          direction="column"
          md
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/extendAccess.svg" alt="tear-one-off sign" style={{ maxWidth: matchesXS ? "20em" : "28em" }} />
          </Grid>
        </Grid>
        <Grid item container alignItems="center" direction="column" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/increaseEngagement.svg" alt="app with notifications" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
