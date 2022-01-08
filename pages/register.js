import {
  Button,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import Layout from "../component/Layout";
import useStyles from "../utils/style";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import Store from "../utils/Store";
// import toast from "react-hot-toast";
// import firebase from "firebase/compat/app";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
// import axios from "axios";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firestore } from "../component/firebase/firebaseClient";
import firebase from "firebase/compat/app";
import { auth } from "../component/firebase/firebaseClient";
//
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { redirect } = router.query; // login?redirect=/payments
  // const { state, dispatch } = useContext(Store);
  // const { userInfo } = state;
  // useEffect(() => {
  //   if (userInfo) {
  //     router.push("/");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const classes = useStyles();
  const submitHandler = async ({ name, email, password, tel }) => {
    closeSnackbar();
    try {
      const userDoc = firestore.doc(`users/${auth.currentUser.uid}`);
      const batch = firestore.batch();
      batch.set(userDoc, {
        name: name,
        id: auth.currentUser.uid,
        email: email.toString().trim(),
        tel: tel,
        password: password,
        provider: auth.currentUser.providerData[0].providerId,
      });

      // dispatch({ type: "USER_LOGIN", payload: data });
      // Cookies.set("userInfo", data);
      // router.push(redirect || "/");
    } catch (err) {
      // enqueueSnackbar(
      //   err.response.data ? err.response.data.message : err.message,
      //   { variant: "error" }
      // );
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <Layout title="Register">
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        {/* <form className={classes.form}> */}
        <Typography component="h1" variant="h1">
          Register
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="name"
                  label="Name"
                  inputProps={{ type: "name" }}
                  error={Boolean(errors.name)}
                  helperText={
                    errors.name
                      ? errors.name.type === "minLength"
                        ? "Name length is more than 1"
                        : "Name is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>

          <ListItem>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  inputProps={{ type: "email" }}
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email
                      ? errors.email.type === "pattern"
                        ? "Email is not valid"
                        : "Email is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="tel"
              label="Mobile Number"
              inputProps={{ type: "tel" }}
            ></TextField>
          </ListItem>
          <ListItem>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="password"
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  inputProps={{ type: "password" }}
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password
                      ? errors.password.type === "minLength"
                        ? "Password length is more than 5"
                        : "Password is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>

          <ListItem>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="confirmPassword"
                  label="confirm Password"
                  inputProps={{ type: "password" }}
                  error={Boolean(errors.confirmPassword)}
                  helperText={
                    errors.confirmPassword
                      ? errors.confirmPassword.type === "minLength"
                        ? "Confirm Password length is more than 5"
                        : "Confirm Password is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>

          <ListItem>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              onClick={async () => {
                createUserWithEmailAndPassword(auth, email, password);
                // await firebase
                //   .auth()
                //   .createUserWithEmailAndPassword(email, password)
                //   .then(function () {
                //     window.location.href = "/";

                //   })
                //   .catch(function (error) {
                //     console.log(error);
                //   });
              }}
            >
              Register
            </Button>
          </ListItem>
          <ListItem>
            Already have an Account? &nbsp;
            <NextLink href={`/login?redirect=${redirect || "/"}`} passHref>
              <Link> Login</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
