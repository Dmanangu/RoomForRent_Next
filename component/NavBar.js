import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import useStyles from "../utils/style";

function NavBar({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Room For Rent</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Room For Rent</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer>
        <Typography>All rights reserved. Room For Rent 2021-2022</Typography>
      </footer>
    </div>
  );
}

export default NavBar;
