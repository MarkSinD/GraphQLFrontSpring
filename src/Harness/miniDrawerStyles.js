import {makeStyles} from "@material-ui/styles";
import tooltipStyles from "./tooltipStyle";

const drawerWidth = 240;

export const miniDrawerStyles = theme => ({
  ...tooltipStyles(theme),
  root: {
    display: "flex",
    height: "100vh",
    overflowY: "auto",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerButton: {
    marginLeft: 12,
    marginRight: 36,
    position: "absolute",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(7),
    overflow: "auto",
  },
  stretchFlex: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
  },
  appTitle: {
    flexGrow: 1,
    marginLeft: `${theme.spacing(2)}px !important`,
  },
  appLogo: {
    width: 40,
    height: 40,
    marginLeft: 96,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appLogoHide: {
    marginLeft: 0,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarNavLink: {
    textDecoration: "none",
    color: theme.palette.common.black,
  },
  toolbarSide: {
    paddingRight: 0,
  }
});

export const useMiniDrawerStyles = makeStyles(miniDrawerStyles, {name: "MiniDrawer"});
