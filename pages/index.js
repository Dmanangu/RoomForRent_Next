import React from "react";

// import useStyles from "../utils/style";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import FullWidthTabs from "./tabs";
import ButtonBases from "./imgbtn";
import Layout from "../component/Layout";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  background: "linear-gradient(#0dc5e1, #1795c5)",
  color: theme.palette.text.secondary,
  padding: 150,
}));

function Home() {
  // const { state, dispatch } = useContext(Store);
  // const { userInfo } = state;
  // const classes = useStyles();
  return (
    <Layout>
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
            style={{ marginLeft: 400 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 5,
              m: 1,
            }}
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <ButtonBases />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Home;
