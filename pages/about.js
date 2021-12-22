import { Button, Container, Link, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import Styles from "../utils/style";
import useStyles from "../utils/style";
import Layout from "../component/Layout";

function About() {
  const classes = useStyles();
  return (
    <Layout>
      <Container>
        <Typography variant="h2" component="h2" className={classes.textCenter}>
          About Us
        </Typography>
        <hr />
        <Typography variant="h4" component="h4" className={classes.textCenter}>
          Room For Rent was created to aid the citizens of Bustos Bulacan in
          looking for a place to rent. It also allows the user to become a host
          of this platform so that they can earn money in return.
        </Typography>
      </Container>
    </Layout>
  );
}

export default About;
