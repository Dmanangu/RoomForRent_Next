import React, { useState, useContext } from "react";
import Head from "next/head";
import {
  Link,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import NextLink from "next/Link";
import useStyles from "../utils/style";

import { useRouter } from "next/router";
// import Store from "../utils/Store";
import Cookies from "js-cookie";
import { auth } from "../component/firebase/firebaseClient";
import { UserContext } from "../component/firebase/context";
import { getAuth, signOut } from "firebase/auth";

function Layout({ children }) {
  const { user } = useContext(UserContext); //user
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(e, redirect);
    }
  };
  const auth = getAuth();
  const logoutClickHandler = () => {
    setAnchorEl(null);
    signOut(auth).then(() => {
      //Sign out
    });
    Cookies.remove(user);
    router.push("/");
  };
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
          {/* This change Login button into the user Name  */}
          {user != null ? (
            <>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={loginClickHandler}
                className={classes.navbarButton}
              >
                {user.name}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={loginMenuCloseHandler}
              >
                {/* <MenuItem onClick={(e) => loginMenuCloseHandler(e, "/profile")}>
                  Profile
                </MenuItem> */}
                {user.isAdmin && (
                  <MenuItem
                    onClick={(e) =>
                      loginMenuCloseHandler(e, "/admin/dashboard")
                    }
                  >
                    Admin Dashboard
                  </MenuItem>
                )}
                <MenuItem onClick={logoutClickHandler}>
                  <SignOutButton />
                </MenuItem>
              </Menu>
            </>
          ) : (
            <NextLink href="/login" passHref>
              <Link className={classes.sizePlus}>Login</Link>
            </NextLink>
          )}
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

function SignOutButton() {
  return (
    <Button href="/" onClick={() => auth.signOut()}>
      Logout
    </Button>
  );
}
