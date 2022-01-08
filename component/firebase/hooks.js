import { auth, firestore, postToJSON } from "./firebaseClient";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = firestore.collection("users").doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setEmail(doc.data()?.email);
      });
    } else {
      setEmail(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, email };
}

export async function useRentalsData() {
  const postsQuery = firestore.collectionGroup("rents");

  const rentalProperties = await postsQuery.get().docs.map(postToJSON);

  console.log("RENTTTTTTTTTTTTTTTTTTTTT");
  console.log(rentalProperties);
  console.log("RENTTTTTTTTTTTTTTTTTTTTT");

  return { rentalProperties };
}

export async function getServerSideProps() {
  const postsQuery = firestore.collectionGroup("rents");
  const posts = (await postsQuery.get()).docs.map(postToJSON);

  return {
    props: { posts },
  };
}
