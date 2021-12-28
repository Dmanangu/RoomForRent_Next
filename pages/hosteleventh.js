import React from "react";
import Head from "next/head";
import { Link } from "@mui/material";
import NextLink from "next/Link";
import useStyles from "../utils/style";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

function HostEleventh() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>11th Hosting</title>
      </Head>
      <div className={classes.splitScreen}>
        <Grid
          item
          style={{
            position: "absolute",
            marginLeft: 50,
          }}
        >
          <h1 style={{ color: "white" }}> Room For Rent </h1>
        </Grid>
        <Box
          sx={{
            width: "100%",
            background: "linear-gradient(#01c9f0, #1b4688)",
          }}
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Box
              style={{ background: "transparent", marginTop: 200 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 20,
                m: 8,
                bgcolor: "transparent",
              }}
            >
              <Grid
                item
                style={{ color: "White", fontSize: 50, fontWeight: 600 }}
              >
                Check Out your Listing!
              </Grid>
            </Box>
          </Grid>
        </Box>

        <div className={classes.rightSide}>
          <Box sx={{ width: "100%", background: "#f7f7f7" }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Box
                style={{ background: "white" }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "transparent",
                }}
              >
                <Grid
                  item
                  style={{
                    marginTop: 200,
                    position: "absolute",
                    marginLeft: 865,
                  }}
                >
                  Your List
                </Grid>

                <Grid
                  item
                  style={{
                    marginTop: 800,
                    position: "absolute",
                    marginLeft: 1800,
                  }}
                >
                  <NextLink href="/" passHref>
                    <Link>
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
                        Save
                      </Button>
                    </Link>
                  </NextLink>
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: 800,
                    position: "absolute",
                    marginLeft: 400,
                  }}
                >
                  <NextLink href="/hosttenth" passHref>
                    <Link>
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
                        Back
                      </Button>
                    </Link>
                  </NextLink>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default HostEleventh;