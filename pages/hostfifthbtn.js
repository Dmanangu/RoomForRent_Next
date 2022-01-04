import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { useSelector, useDispatch } from "react-redux";
import {
  GUEST_HOST_BTN,
  BEDS_HOST_BTN,
  BEDSROOMS_HOST_BTN,
  BATHROOMS_HOST_BTN,
} from "../redux/actionTypes";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class FifthButton extends React.Component {
  state = {
    guest: 0,
    beds: 0,
    bedrooms: 0,
    bathrooms: 0,
    show: true,
  };

  IncrementItemGuest = () => {
    this.setState({ guest: this.state.guest + 1 });
  };
  DecreaseItemGuest = () => {
    if (this.state.guest !== 0) this.setState({ guest: this.state.guest - 1 });
  };
  ToggleClickGuest = () => {
    this.setState({ show: !this.state.show });
  };

  IncrementItemBeds = () => {
    this.setState({ beds: this.state.beds + 1 });
  };
  DecreaseItemBeds = () => {
    if (this.state.beds !== 0) this.setState({ beds: this.state.beds - 1 });
  };
  ToggleClickBeds = () => {
    this.setState({ show: !this.state.show });
  };

  IncrementItemBedRooms = () => {
    this.setState({ bedrooms: this.state.bedrooms + 1 });
  };
  DecreaseItemBedRooms = () => {
    if (this.state.bedrooms !== 0)
      this.setState({ bedrooms: this.state.bedrooms - 1 });
  };
  ToggleClickBedRooms = () => {
    this.setState({ show: !this.state.show });
  };

  IncrementItemBathRooms = () => {
    this.setState({ bathrooms: this.state.bathrooms + 1 });
  };
  DecreaseItemBathRooms = () => {
    if (this.state.bathrooms !== 0)
      this.setState({ bathrooms: this.state.bathrooms - 1 });
  };
  ToggleClickBathRooms = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
          <Item sx={{ order: 1 }} style={{ width: 400 }}>
            <h1 style={{ color: "black", fontSize: 30 }}>Guest</h1>
          </Item>
          <Item sx={{ order: 2 }} style={{ width: 90 }}>
            <button
              onClick={this.DecreaseItemGuest}
              style={{ width: 30, height: 30, marginTop: 20 }}
            >
              -
            </button>
          </Item>
          <Item sx={{ order: 3 }} style={{ width: 90 }}>
            <h2 style={{ color: "black", fontSize: 30, marginTop: 15 }}>
              {this.state.guest}
            </h2>
          </Item>
          <Item sx={{ order: 4 }} style={{ width: 90 }}>
            <button
              onClick={this.IncrementItemGuest}
              style={{ width: 30, height: 30, marginTop: 20 }}
            >
              +
            </button>
          </Item>
        </Box>
        <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
          <Item sx={{ order: 1 }} style={{ width: 400 }}>
            <h1 style={{ color: "black", fontSize: 30 }}>Beds</h1>
          </Item>
          <Item sx={{ order: 2 }} style={{ width: 90 }}>
            <button
              onClick={this.DecreaseItemBeds}
              style={{ width: 30, height: 30, marginTop: 20 }}
            >
              -
            </button>
          </Item>
          <Item sx={{ order: 3 }} style={{ width: 90 }}>
            <h2 style={{ color: "black", fontSize: 30, marginTop: 15 }}>
              {this.state.beds}
            </h2>
          </Item>
          <Item sx={{ order: 4 }} style={{ width: 90 }}>
            <button
              onClick={this.IncrementItemBeds}
              style={{ width: 30, height: 30, marginTop: 20 }}
            >
              +
            </button>
          </Item>
        </Box>
        <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
          <Item sx={{ order: 1 }} style={{ width: 400 }}>
            <h1 style={{ color: "black", fontSize: 30 }}>Bedrooms</h1>
          </Item>
          <Item sx={{ order: 2 }} style={{ width: 90 }}>
            <button
              onClick={this.DecreaseItemBedRooms}
              style={{ width: 30, height: 30, marginTop: 20 }}
            >
              -
            </button>
          </Item>
          <Item sx={{ order: 3 }} style={{ width: 90 }}>
            <h2 style={{ color: "black", fontSize: 30, marginTop: 15 }}>
              {this.state.bedrooms}
            </h2>
          </Item>
          <Item sx={{ order: 4 }} style={{ width: 90 }}>
            <button
              onClick={this.IncrementItemBedRooms}
              style={{ width: 30, height: 30, marginTop: 20 }}
            >
              +
            </button>
          </Item>
        </Box>
        <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
          <Item sx={{ order: 1 }} style={{ width: 400 }}>
            <h1 style={{ color: "black", fontSize: 30 }}>Bathrooms</h1>
          </Item>
          <Item sx={{ order: 2 }} style={{ width: 90 }}>
            <button
              onClick={this.DecreaseItemBathRooms}
              style={{ width: 30, height: 30, marginTop: 20 }}
            >
              -
            </button>
          </Item>
          <Item sx={{ order: 3 }} style={{ width: 90 }}>
            <h2 style={{ color: "black", fontSize: 30, marginTop: 15 }}>
              {this.state.bathrooms}
            </h2>
          </Item>
          <Item sx={{ order: 4 }} style={{ width: 90 }}>
            <button
              onClick={this.IncrementItemBathRooms}
              style={{ width: 30, height: 30, marginTop: 20 }}
            >
              +
            </button>
          </Item>
        </Box>
      </div>
    );
  }
}

export default FifthButton;
