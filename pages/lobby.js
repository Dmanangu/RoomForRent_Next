import { Typography } from "@mui/material";
import React from "react";
import Layout from "../component/Layout";
import Products from "../component/Products";
import useStyles from "../utils/style";

function Lobby() {
  const classes = useStyles();
  return (
    <Layout>
      <Typography variant="h4" className={classes.footer} marginTop={3}>
        Available Homes
      </Typography>
      <div className={classes.centerCards}>
        <Products />
      </div>
    </Layout>
  );
}
export default Lobby;
