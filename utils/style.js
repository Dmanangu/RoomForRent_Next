import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#0f7db0",
    "& a": {
      color: "#ffffff",
      marginLeft: 80,
    },
  },
  title: {
    fontWeight: "bold",
    fontSize: " 1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  sizePlus: {
    fontSize: "20px",
  },
  square: {
    borderRadius: 20,
  },
  main: {
    minHeight: "25vh",
    minWidth: "100%",
  },
  footer: {
    textAlign: "center",
  },
  secondtext: {
    fontSize: "23px",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  addButton: {
    primary: {
      main: "#2596be", //changed color to lighter blue
    },
    secondary: {
      main: "#2596be",
    },
  },
  form: {
    width: "100%",
    maxWidth: 600,
    margin: "0 auto",
  },
  navbarButton: {
    color: "#ffffff",
    textTransform: "initial",
  },
  transparentBackground: {
    backgroundColor: "transparent",
  },
  error: {
    color: "#f04040",
  },
  fullWidth: {
    width: "100%",
  },
  textCenter: {
    textAlign: "center",
  },
});
export default useStyles;
