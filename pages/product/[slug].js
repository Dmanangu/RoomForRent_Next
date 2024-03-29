import { useRouter } from "next/router";
import React, { useState } from "react";
import data from "../../component/data";
import Layout from "../../component/Layout";
import useStyles from "../../utils/style";
import NextLink from "next/link";
import {
  Button,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import "react-date-range/dist/styles.css"; //main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Box } from "@mui/system";

function ProductScreen() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const [noOfDays, setNoOfDays] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.eHomes.find((a) => a.slug === slug);
  if (!product) {
    return <div> This Place is no Longer Available</div>;
  }
  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; //123.456 -> 123.46
  const rentalCost = round2(product.price * noOfDays);
  const cleaningCost = round2(rentalCost * 0.05);
  const serviceFee = round2(rentalCost * 0.08);
  const totalPrice = round2(rentalCost + serviceFee + cleaningCost);
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
        <Grid item md={4} xs={12}>
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
        <Grid item md={2.5} xs={10}>
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
        <Grid xs={7} md={4}>
          <Box mt={3}>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>
                      <strong>Price</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      <strong>₱{product.price}</strong> /night
                    </Typography>
                  </Grid>
                  <Grid>
                    <DateRangePicker
                      ranges={[selectionRange]}
                      minDate={new Date()}
                      rangeColors={"#fd5b61"} //color of Airbnb but it is not activating
                      onChange={handleSelect}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="h5">Number of Guest:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type="number"
                      value={noOfGuest}
                      min={1}
                      onChange={(e) => setNoOfGuest(e.target.value)}
                      className={classes.guestInput}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="h5">Number of Days:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type="number"
                      value={noOfDays}
                      min={1}
                      onChange={(e) => setNoOfDays(e.target.value)}
                      className={classes.guestInput}
                    />
                  </Grid>
                  <Divider />
                  <Grid item xs={6}>
                    <Typography component="h3" variant="h5">
                      <strong>Rental Cost: </strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>₱{rentalCost} /night</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="h3" variant="h5">
                      <strong>Cleaning Cost: </strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>₱{product.price * noOfDays * 0.05}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="h3" variant="h5">
                      <strong>Service Fee: </strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>₱{serviceFee}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="h3" variant="h5">
                      <strong>Total Cost: </strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>₱{totalPrice}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <NextLink href={"/payment"}>
                  <Button fullWidth variant="contained" color="primary">
                    Reserve Now
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ProductScreen;
