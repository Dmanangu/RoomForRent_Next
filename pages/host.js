import React from "react";
import Head from "next/head";
import { Link, AppBar, Container, Toolbar, Typography } from "@mui/material";
import NextLink from "next/Link";
import useStyles from "../utils/style";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import sideImage from "../public/images/image3.jpg";

function handleIncrementApartment() {
  this.setState((state) => ({ aptmnt: (state.aptmnt = "Apartment") }));
}

function handleIncrementHouse() {
  this.setState((state) => ({ hse: (state.hse = "House") }));
}
function handleIncrementSecondary() {
  this.setState((state) => ({ sndy: (state.sndy = "Secondary Unit") }));
}

function handleIncrementBednbreakfast() {
  this.setState((state) => ({ bnb: (state.bnb = "Bed and Breakfast") }));
}
function handleIncrementBoutique() {
  this.setState((state) => ({ btq: (state.btq = "Botique Hotel") }));
}

function Host() {
  const classes = useStyles();
  const state = { aptmnt: "", hse: "", sndy: "", bnb: "", btq: "" };

  return (
    <div>
      <Head>
        <title>Try Hosting</title>
      </Head>
      <AppBar position="static" className={classes.nav}>
        <Toolbar className={classes.grow}>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.title}>Room For Rent</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
        </Toolbar>
      </AppBar>
      <div className={classes.splitScreen}>
        <Box sx={{ width: "100%", background: "Black" }}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Box
              style={{ background: "transparent" }}
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 30,
                m: 8,
                bgcolor: "transparent",
              }}
            >
              <Grid
                item
                style={{ color: "White", fontSize: 50, fontWeight: 600 }}
              >
                Hosting makes RoomforRent, RoomforRent
              </Grid>
            </Box>
          </Grid>
        </Box>

        <div className={classes.rightPane}>
          <Box sx={{ width: "100%", background: "Black" }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
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
                <Grid item>
                  <Container>
                    <Image src={sideImage} alt="sideImage" layout="fixed" />
                  </Container>
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: 700,
                    position: "absolute",
                    marginLeft: 500,
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      fontSize: 17,
                      maxWidth: "150px",
                      maxHeight: "80px",
                      minWidth: "90px",
                      minHeight: "65px",
                    }}
                  >
                    Try Hosting
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Host;
