import { createMuiTheme } from "@material-ui/core/styles";

// INLINE STYLES - see header component for example

//import { makeStyles } from "@material-ui/styles";
//const useStyles = makeStyles({ root: {} })
//use makeStyles for inline styles and use classes = useStyles()

// VARIABLES
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

//pallette - way to manage colors used throughout the app
//jss allows you to write all your styles at javascript objects
//customization/default theme in material ui docs shows the default theme and
//what you can overwrite
export default createMuiTheme({
  //palette/common for main site colors and primary/secondary
  //specify typography font sizes and color using the variant tag throughout the app
  //there is also a color prop

  // <Typography variant="h3" color="secondary">
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      light: "#FFFFFF",
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      //material ui uses rems as default responsive unit throughout their theme - its connected to base font size material ui provides us
      //1rem = 14px
      fontSize: "1rem",
      //spaces between tabs
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subTitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    learnButton: {
      borderColor: arcBlue,
      borderRadius: 50,
      color: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },
    overrides: {
      MuiInputLabel: {
        root: {
          color: arcBlue,
          fontSize: "1rem",
        },
      },
      MuiInput: {
        root: {
          color: arcGrey,
          fontWeight: 300,
        },
        underline: {
          "&:before": {
            borderBottom: `2px solid ${arcBlue}`,
          },
          "&:hover:not($disabled):not($focused):not($error):before": {
            borderBottom: `2px solid ${arcBlue}`,
          },
        },
      },
    },
  },
});
