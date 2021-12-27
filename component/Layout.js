import React from "react";
import Head from "next/head";
import { Link, AppBar, Container, Toolbar, Typography } from "@mui/material";
import NextLink from "next/Link";
import useStyles from "../utils/style";

function Layout({ children }) {
  // const { state, dispatch } = useContext(Store);
  // const { userInfo } = state;
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Room For Rent</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar className={classes.grow}>
          <Typography className={classes.title}>Room For Rent</Typography>
          <div className={classes.grow}></div>
          <NextLink href="/" passHref>
            <Link>
              <Typography>Home</Typography>
            </Link>
          </NextLink>
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
          <NextLink href="/reservations" passHref>
            <Link>
              <Typography>Reservations</Typography>
            </Link>
          </NextLink>
          <NextLink href="/login" passHref>
            <Link>Login</Link>
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

      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Room For Rent 2021-2022</Typography>
      </footer>
    </div>
  );
}

export default Layout;
