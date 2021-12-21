import {
  Button,
  Container,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "../utils/style";
import NextLink from "next/link";

export default function Login() {
  const classes = useStyles();
  return (
    <div title="Login">
      <Container className={classes.form}>
        <form>
          <Typography component="h4" variant="h4">
            Login
          </Typography>
          <List>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                inputProps={{ type: "email" }}
              ></TextField>
            </ListItem>

            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Password"
                inputProps={{ type: "password" }}
              ></TextField>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                Login
              </Button>
            </ListItem>
            <ListItem>
              Does not have an account? &nbsp;
              <NextLink href="/register" passHref>
                <Link>Register</Link>
              </NextLink>
            </ListItem>
          </List>
        </form>
      </Container>
    </div>
  );
}
