import React, { useState, useContext } from "react";
import Head from "next/head";
import {
  Link,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import NextLink from "next/Link";
import useStyles from "../utils/style";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Image from "next/image";
import FullWidthTabs from "./tabs";
import ButtonBases from "./imgbtn";
import entireHome from "../public/images/entire_home.png";
import pets from "../public/images/pets.png";
import uniqPlace from "../public/images/unique_place.png";
import { Menu, MenuItem } from "@material-ui/core";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Store from "../utils/Store";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  background: "linear-gradient(#0dc5e1, #1795c5)",
  color: theme.palette.text.secondary,
  padding: 150,
}));

const Buttons = styled(Paper)(({ theme }) => ({
  ...theme.typography.body3,
  padding: theme.spacing(3),
  textAlign: "center",
  borderRadius: 20,
  color: theme.palette.text.secondary,
}));

function NavBar({ children }) {
  // const { state, dispatch } = useContext(Store);
  // const { userInfo } = state;
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = () => {
    setAnchorEl(null);
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatchEvent({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    router.push("/");
  };
  return (
    <div>
      <Head>
        <title>Room For Rent</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar className={classes.grow}>
          <Typography className={classes.title}>Room For Rent</Typography>
          <div className={classes.grow}></div>
          <Link>
            <Typography>Home</Typography>
          </Link>
          <NextLink href="/about" passHref>
            <Link>
              <Typography>About</Typography>
            </Link>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Link>
              <Typography>Contact</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <NextLink href="/host" passHref>
            <Link>
              <Typography>Become a host</Typography>
            </Link>
          </NextLink>
          {/* This change Login button into the user Name  */}
          {/* {userInfo ? (
            <>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={loginClickHandler}
                className={classes.navbarButton}
              >
                {userInfo.name}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={loginMenuCloseHandler}
              >
                <MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
                <MenuItem onClick={loginMenuCloseHandler}>My Account</MenuItem>
                <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          )} */}
        </Toolbar>
      </AppBar>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={100}>
            <Item>
              <Box
                style={{ background: "transparent" }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "transparent",
                }}
              >
                <Paper
                  sx={{ height: 100, width: 800 }}
                  style={{
                    borderRadius: 20,
                    padding: 3,
                    textAlign: "center",
                    backgroundColor: "transparent",
                    color: "transparent",
                  }}
                >
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "center",

                      m: 1,
                    }}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item>
                      <FullWidthTabs />
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </Item>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,
            }}
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <ButtonBases />
            <Grid item xs={2}>
              <NextLink href="/entireHome" passHref>
                <Link>
                  <Image
                    className={classes.square}
                    src={entireHome}
                    alt="EntireHome"
                    width={500}
                    height={400}
                  />
                </Link>
              </NextLink>
              <Grid
                style={{ fontSize: 25 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                }}
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                Entire Homes
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <NextLink href="/pets" passHref>
                <Link>
                  <Image
                    className={classes.square}
                    src={pets}
                    alt="Pets"
                    width={500}
                    height={400}
                  />
                </Link>
              </NextLink>
              <Grid
                style={{ fontSize: 25 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                }}
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                Pets Allowed
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <NextLink href="/uniqPlace" passHref>
                <Link>
                  <Image
                    className={classes.square}
                    src={uniqPlace}
                    alt="UniquePlace"
                    width={500}
                    height={400}
                  />
                </Link>
              </NextLink>
              <Grid
                style={{ fontSize: 25 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                }}
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                Unique Places
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Room For Rent 2021-2022</Typography>
      </footer>
    </div>
  );
}

export default NavBar;
