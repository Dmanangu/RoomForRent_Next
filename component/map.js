import { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 14.9543,
    longitude: 120.91867,
    zoom: 13.5,
    width: 900,
    height: 900,
    pitch: 70,
  });

  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/roomforrent/ckxskj6cb84ct15o4dh7qyr44"}
      mapboxApiAccessToken={
        "pk.eyJ1Ijoicm9vbWZvcnJlbnQiLCJhIjoiY2t3a2JueTF1MHh0aTJ3cXY0bjNocmZsZCJ9.jXzlIrtHZT-hz7KYydJixw"
      }
      {...viewport}
      onViewportChange={(newView) => setViewport(newView)}
    ></ReactMapGL>
  );
}

export default Map;
