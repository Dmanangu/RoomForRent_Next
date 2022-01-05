import React, { useState } from "react";
import Head from "next/head";
import { Link } from "@mui/material";
import NextLink from "next/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import { useSelector } from "react-redux";

import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function HostEleventh() {
  const [viewport, setViewport] = useState({
    latitude: 14.9543,
    longitude: 120.91867,
    zoom: 13.5,
    width: 900,
    height: 500,
    pitch: 70,
  });
  const { firstpageValue } = useSelector((state) => state.firstpage);
  const { secondpageValue } = useSelector((state) => state.secondpage);
  const { thirdpageValue } = useSelector((state) => state.thirdpage);
  const { locationValue } = useSelector((state) => state.fourthpage);
  const { guestValue } = useSelector((state) => state.fifthpage);
  const { bedsValue } = useSelector((state) => state.fifthpage);
  const { bedroomsValue } = useSelector((state) => state.fifthpage);
  const { bathroomsValue } = useSelector((state) => state.fifthpage);
  const { amenitiesValue, favoritesValue, safetyitemsValue } = useSelector(
    (state) => state.sixthpage
  );
  const { imageValue } = useSelector((state) => state.seventhpage);
  const { latitudeValue, longitudeValue } = useSelector(
    (state) => state.eightpage
  );
  const { titleValue, descriptionValue } = useSelector(
    (state) => state.ninthpage
  );
  const { priceValue } = useSelector((state) => state.tenthpage);

  return (
    <div>
      <Head>
        <title>11th Hosting</title>
      </Head>

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
          item
          style={{
            color: "White",
            fontSize: 50,
            fontWeight: 600,
            marginTop: 60,
            position: "absolute",
            marginLeft: 650,
          }}
        >
          Check Out your Listing!
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            IMAGE {imageValue}
          </Grid>
          <Grid item xs={6}>
            <Grid
              item
              style={{
                color: "White",
                fontSize: 20,
                fontWeight: 600,
                marginTop: 150,
                position: "absolute",
              }}
            >
              <p> {titleValue}</p>
              <p>
                Guest: {guestValue}, Beds: {bedsValue}, BedRooms:{" "}
                {bedroomsValue}, Bathrooms: {bathroomsValue}
              </p>
              <p>{descriptionValue}</p>
              <p>Additional Informations:</p>
              <p> - {amenitiesValue}</p>
              <p> - {favoritesValue}</p>
              <p> - {safetyitemsValue}</p>
              <p>₱{priceValue}/Night</p>
            </Grid>
          </Grid>
        </Grid>

        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
              style={{
                color: "White",
                fontSize: 10,
                fontWeight: 600,
              }}
            ></Grid>
          </Box>
        </Grid>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <p>Location: {locationValue}</p>
          <p>
            {firstpageValue} - {secondpageValue} - {thirdpageValue}
          </p>
          <p>LAT: {latitudeValue}</p>
          <p>LONG: {longitudeValue}</p>
        </Grid>
        <Grid item xs={6}>
          <ReactMapGL
            style={{
              boxShadow: "2px 2px 5px 2px",
            }}
            mapStyle={"mapbox://styles/roomforrent/ckxskj6cb84ct15o4dh7qyr44"}
            mapboxApiAccessToken={
              "pk.eyJ1Ijoicm9vbWZvcnJlbnQiLCJhIjoiY2t3a2JueTF1MHh0aTJ3cXY0bjNocmZsZCJ9.jXzlIrtHZT-hz7KYydJixw"
            }
            {...viewport}
            onViewportChange={(newView) => setViewport(newView)}
          ></ReactMapGL>
        </Grid>
      </Grid>
      <Grid
        item
        style={{
          marginTop: 200,
          position: "absolute",
          marginLeft: 865,
        }}
      ></Grid>

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
    </div>
  );
}

export default HostEleventh;
