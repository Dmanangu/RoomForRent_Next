import { createContext } from "react";
export const UserContext = createContext({ user: null, email: null });
export const useRentalsData = createContext({ posts: null });
