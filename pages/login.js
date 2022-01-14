import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";

import googleIcon from "../public/images/google-icon.png";
import Image from "next/image";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React, { useState } from "react";
//useContext, useEffect,
import Layout from "../component/Layout";
import useStyles from "../utils/style";
import { Controller, useForm } from "react-hook-form";
// import { useSnackbar } from "notistack";
// import { Store } from "../utils/Store";
// import axios from "axios";
// import Cookies from "js-cookie";
//firebase import

//firebase import
import {
  auth,
  googleAuthProvider,
  firestore,
} from "../component/firebase/firebaseClient";

export default function Login() {
  const {
    // handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { redirect } = router.query; // login?redirect=/payments
  // const { state, dispatch } = useContext(Store);
  // const { userInfo } = state;
  // useEffect(() => {
  //   if (userInfo) {
  //     router.push("/");
  //   }
  // }, []);

  const classes = useStyles();
  // const submitHandler = async ({ email, password }) => {
  //   closeSnackbar();
  //   try {
  //     const { data } = await axios.post("/api/users/login", {
  //       email,
  //       password,
  //     });
  //     dispatch({ type: "USER_LOGIN", payload: data });
  //     Cookies.set("userInfo", data);
  //     router.push(redirect || "/");
  //   } catch (err) {
  //     enqueueSnackbar(
  //       err.response.data ? err.response.data.message : err.message,
  //       { variant: "error" }
  //     );
  //   }
  // };

  //firebase usage
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout title="Login">
      {/*<form onSubmit={handleSubmit(submitHandler)} className={classes.form}>*/}
      <form className={classes.form}>
        <Typography component="h1" variant="h1">
          Login
        </Typography>
        <List>
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="password"
                  label="Password"
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
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              // onClick={async () => {
              //   signInUserWithEmailAndPassword(auth, email, password);
              // }}
            >
              Login
            </Button>
          </ListItem>
          <ListItem>
            Don&apos;t have an account? &nbsp;
            <NextLink href={`/register?redirect=${redirect || "/"}`} passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>
          <SignInButton href={"/"} />
        </List>
      </form>
    </Layout>
  );
}

//sign In with google

function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
    // Create refs for both documents
    const userDoc = firestore.doc(`users/${auth.currentUser.uid}`);
    //const usernameDoc = firestore.doc(usernames/${formValue});

    // Commit both docs together as a batch write.
    const batch = firestore.batch();
    batch.set(userDoc, {
      name: auth.currentUser.displayName,
      id: auth.currentUser.uid,
      email: auth.currentUser.email,
    });
    //batch.set(usernameDoc, { uid: user.uid });
    if (!userDoc) {
      throw new Error("There was an error in Login");
    }
    await batch.commit();
  };
  return (
    <Button onClick={signInWithGoogle} variant="contained">
      <Image src={googleIcon} height={50} width={50} alt="google icon" /> Sign
      in with Google
    </Button>
  );
}
