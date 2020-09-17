import React, { useState } from "react";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import ButtonArrow from "../src/ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  send: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  [theme.breakpoints.down("sm")]: {
    height: 40,
    width: 225,
  },
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);

        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }

        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/.test(event.target.value);

        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };
  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg={4} xl={3} justify="center" alignItems="center" style={{ marginBottom: matchesMD ? "5em" : 0, marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0 }}>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h2" style={{ lineHeight: 1 }}>
                Contact Us
              </Typography>
              <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img src="/assets/phone.svg" alt="phone" style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ color: theme.palette.common.blue }}>
                  <a href="tel:07930041972" style={{ textDecoration: "none", color: "inherit" }}>
                    07930041972
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img src="/assets/email.svg" alt="envelope" style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                  <a href="mailto:aidanw549@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
                    aidan@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ maxWidth: "20em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField fullWidth label="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField fullWidth label="Email" error={emailHelper.length !== 0} helperText={emailHelper} id="email" value={email} onChange={onChange} />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField fullWidth label="Phone" id="phone" error={phoneHelper.length !== 0} helperText={phoneHelper} value={phone} onChange={onChange} />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField fullWidth InputProps={{ disableUnderline: true }} className={classes.message} multiline rows={10} value={message} id="message" onChange={(e) => setMessage(e.target.value)} />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button onClick={() => setOpen(true)} variant="contained" className={classes.send} disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}>
                Send Message <img src="/assets/send.svg" alt="paper airplane" style={{ marginLeft: "1em" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog fullScreen={matchesXS} open={open} onClose={() => setOpen(false)} style={{ zIndex: 2000 }} PaperProps={{ style: { paddingTop: matchesXS ? "1em" : "5em", paddingBottom: matchesXS ? "1em" : "5em", paddingLeft: matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "10em" : "20em", paddingRight: matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "10em" : "20em" } }}>
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField fullWidth label="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField fullWidth label="Email" error={emailHelper.length !== 0} helperText={emailHelper} id="email" value={email} onChange={onChange} />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField fullWidth label="Phone" id="phone" error={phoneHelper.length !== 0} helperText={phoneHelper} value={phone} onChange={onChange} />
            </Grid>

            <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
              <TextField fullWidth InputProps={{ disableUnderline: true }} className={classes.message} multiline rows={10} value={message} id="message" onChange={(e) => setMessage(e.target.value)} />
            </Grid>
          </Grid>
          <Grid alignItems="center" direction={matchesSM ? "column" : "row"} item container style={{ marginTop: "2em" }}>
            <Grid item>
              <Button style={{ fontWeight: 300 }} color="primary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={() => setOpen(true)} variant="contained" className={classes.send} disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}>
                Send Message <img src="/assets/send.svg" alt="paper airplane" style={{ marginLeft: "1em" }} />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Grid item container direction={matchesMD ? "column" : "row"} justify={matchesMD ? "center" : undefined} alignItems="center" className={classes.background} lg={8} xl={9}>
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h2">
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography align={matchesMD ? "center" : undefined} variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                Take advantage of the 21st Century.
              </Typography>
              <Grid container justify={matchesMD ? "center" : undefined} item>
                <Button component={Link} href="/revolution" variant="outlined" className={classes.learnButton}>
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button component={Link} href="/estimate" variant="container" className={classes.estimateButton}>
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
