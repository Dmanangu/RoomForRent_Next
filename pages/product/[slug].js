import { useRouter } from "next/router";
import React from "react";
import data from "../../component/data";
import Layout from "../../component/Layout";
import useStyles from "../../utils/style";
import NextLink from "next/link";
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";

function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.eHomes.find((a) => a.slug === slug);
  if (!product) {
    return <div> This Place is no Longer Available</div>;
  }
  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <NextLink href="/lobby" passHref>
          <Link>Back To Lobby</Link>
        </NextLink>
      </div>
      <Typography variant="h4" textAlign={"center"} marginBottom={3}>
        {product.name}
      </Typography>
      <Grid container spacing={1} marginLeft={3}>
        <Grid item md={5} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            Layout="responsive"
          />
          {/* Activate this for multiple images  
          you may use the Box from Material UI core
          * /}
          {/* For CSS 
          .image width: 25% 
          .image img width: 100% 
          .sub-images-section width: 50% display flex flex-warp: hidden overflow hidden */}
          {/* <div className="sub-images-section">
              {ImageList.map(({_key, asset}, image) => <Image key={_key} identifier="image" image={assets}/>)}
          </div> */}
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Pets: {product.pets} </Typography>
            </ListItem>
            <ListItem>
              <Typography>Rating: {product.rating}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Description:{product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>₱{product.price} /night</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Reserve Now
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ProductScreen;
