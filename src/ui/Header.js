import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Button from "@material-ui/core/Button";
import Link from "../Link";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
// **** ELEVATE ON SCROLL APP BAR ****
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    //gets all the toolbar styles
    //we apply it as a div under the appbar - acts as an invisible cushion underneath appbar to push the hidden content
    //out to where it can be seen under the navbar as the content is at the top covered up by default
    ...theme.mixins.toolbar,
    //marginBottom used because logo height made the navbar taller
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    //removes ripple
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    //sets the margin between the image and the tabs to as much as they can be depending on screen width
    marginLeft: "auto",
  },
  tab: {
    //taken from theme
    ...theme.typography.tab,
    minWidth: 10,
    //remains a constant spacing between tabs regardless of monitor size
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
}));

export default function Header({ value, setValue, selectedIndex, setSelectedIndex }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();

  //MENU ITEM STATES
  //state which stores whichever component we click on and where we wnt the menu to be rendered
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  //MENU ITEM FUNCTIONS
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  //click event for menu item
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Developlment", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  //fixes the active tabs not setting correctly on page refresh
  //checks current url and sets appropriate state value
  useEffect(() => {
    // if (window.location.pathname === "/" && value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === "/services" && value !== 1) {
    //   setValue(1);
    // } else if (window.location.pathname === "/revolution" && value !== 2) {
    //   setValue(2);
    // } else if (window.location.pathname === "/about" && value !== 3) {
    //   setValue(3);
    // } else if (window.location.pathname === "contact/" && value !== 4) {
    //   setValue(4);
    // } else if (window.location.pathname === "/estimate" && value !== 5) {
    //   setValue(5);
    // }

    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 0) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;

      case "/about":
        if (value !== 3) {
          setValue(3);
        }
        break;

      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;

      case "/estimate":
        if (value !== 5) {
          setValue(5);
        }
        break;

      default:
        break;
    }
    //tells useEffect we are depending on the state value
    //if it hasnt changed we dont want to run the code again
  }, [value, selectedIndex]);

  const tabs = (
    <>
      {/* Tabs are used to switch between nav labels and can show which one is active when clicked
            value keeps track of what page were on
            */}
      {/* you can hide the underline indicator color when the tab is active */}
      <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
        {/* aria properties are for the menu item */}
        <Tab disableRipple className={classes.tab} component={Link} href="/" label="Home" />
        <Tab aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup={anchorEl ? "true" : undefined} onMouseOver={(e) => handleClick(e)} disableRipple className={classes.tab} component={Link} href="services" label="Services" />
        <Tab disableRipple className={classes.tab} component={Link} href="revolution" label="The Revolution" />
        <Tab disableRipple className={classes.tab} component={Link} href="about" label="About Us" />
        <Tab disableRipple className={classes.tab} component={Link} href="contact" label="Contact Us" />
      </Tabs>
      <Button onClick={() => setValue(5)} variant="contained" color="secondary" component={Link} href="estimate" className={classes.button}>
        Free Estimate
      </Button>
      {/* maps over menu items and selects the shows the selected item menu in darkened background */}
      <Menu classes={{ paper: classes.menu }} elevation={0} MenuListProps={{ onMouseLeave: handleClose }} id="simple-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose} elevation={0}>
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            href={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer classes={{ paper: classes.drawer }} disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            href="/"
            selected={value === 0}
          >
            <ListItemText className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            href="/services"
            selected={value === 1}
          >
            <ListItemText className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            href="/revolution"
            selected={value === 2}
          >
            <ListItemText className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            href="/about"
            selected={value === 3}
          >
            <ListItemText className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            href="/contact"
            selected={value === 4}
          >
            <ListItemText className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItemEstimate}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            href="/estimate"
            selected={value === 5}
          >
            <ListItemText component={Link} href="/estimate" className={value === 5 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        {/* default position is fixed and color is default to primary - can change to secondary */}
        <AppBar position="fixed" color="primary">
          {/* Toolbar helps layout everything horizontally in the app bar - like flex */}
          {/* Disable gutters removes padding */}
          <Toolbar disableGutters>
            {/* setValue to 0 as when we refresh the logo the active tab doesnt set to home by default */}
            <Button component={Link} href="/" disableRipple className={classes.logoContainer} onClick={() => setValue(0)}>
              <img src="/assets/logo.svg" className={classes.logo} alt="Company logo" />
            </Button>
            <Hidden mdDown>{tabs}</Hidden>
            <Hidden lgUp>{drawer}</Hidden>
            {/* {matches ? drawer : tabs} */}
            {/* old menu item list without mapping */}
            {/* <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="/services"
              >
                Services
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="/customsoftware"
              >
                Custom Software Development
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="/mobileapps"
              >
                Mobile App Development
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="/websites"
              >
                Website Development
              </MenuItem> */}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
