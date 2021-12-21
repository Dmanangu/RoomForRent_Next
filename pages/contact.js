import { Button, Container, Link, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import Styles from "../utils/style";
import useStyles from "../utils/style";

function Contact() {
  const classes = useStyles();
  return (
    <div>
      <NextLink href="/" passHref>
        <Link>
          <Typography variant="h4" component="h4">
            Back To Home
          </Typography>
        </Link>
      </NextLink>
      <Container>
        <Typography variant="h2" component="h2" className={classes.textCenter}>
          Contact Us
        </Typography>
        <hr />
        <Typography variant="h4" component="h4" className={classes.textCenter}>
          Mikeangelo Cruz
        </Typography>
        <Typography variant="h4" component="h4" className={classes.textCenter}>
          Carla Cabintoy
        </Typography>
        <Typography variant="h4" component="h4" className={classes.textCenter}>
          Joshua Cayanan
        </Typography>
        <Typography variant="h4" component="h4" className={classes.textCenter}>
          Lawrence Felicianos
        </Typography>
      </Container>
    </div>
  );
}

export default Contact;
