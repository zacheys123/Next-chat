"use client";
import { authReducer } from "@/reducers/authReducer";
import { createContext, useContext, useMemo, useReducer } from "react";

const initialState = {
  isAuthenticated: false,
  mainUser: {},
  mainUserProfile: {},
  successmessage: "",
  errormessage: "",
  theme: false,
  authInfo: "unAuthorized",
  toggle: false,
  allusers: [],
};

const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [authstate, setAuthState] = useReducer(authReducer, initialState);
  const value = useMemo(() => {
    return { authstate, setAuthState };
  }, [authstate]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
