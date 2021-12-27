import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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

  IncrementItemG = () => {
    this.setState({ guest: this.state.guest + 1 });
  };
  DecreaseItemG = () => {
    if (this.state.guest !== 0) this.setState({ guest: this.state.guest - 1 });
  };
  ToggleClickG = () => {
    this.setState({ show: !this.state.show });
  };

  IncrementItemB = () => {
    this.setState({ beds: this.state.beds + 1 });
  };
  DecreaseItemB = () => {
    if (this.state.beds !== 0) this.setState({ beds: this.state.beds - 1 });
  };
  ToggleClickB = () => {
    this.setState({ show: !this.state.show });
  };

  IncrementItemBR = () => {
    this.setState({ bedrooms: this.state.bedrooms + 1 });
  };
  DecreaseItemBR = () => {
    if (this.state.bedrooms !== 0)
      this.setState({ bedrooms: this.state.bedrooms - 1 });
  };
  ToggleClickBR = () => {
    this.setState({ show: !this.state.show });
  };

  IncrementItemBT = () => {
    this.setState({ bathrooms: this.state.bathrooms + 1 });
  };
  DecreaseItemBT = () => {
    if (this.state.bathrooms !== 0)
      this.setState({ bathrooms: this.state.bathrooms - 1 });
  };
  ToggleClickBT = () => {
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
              onClick={this.DecreaseItemG}
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
              onClick={this.IncrementItemG}
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
              onClick={this.DecreaseItemB}
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
              onClick={this.IncrementItemB}
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
              onClick={this.DecreaseItemBR}
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
              onClick={this.IncrementItemBR}
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
              onClick={this.DecreaseItemBT}
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
              onClick={this.IncrementItemBT}
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
