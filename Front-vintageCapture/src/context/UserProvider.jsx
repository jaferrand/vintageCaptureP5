import UserContext from "./UserContext";
import { useReducer, useState } from "react";
import userReducers from "./userReducers";
import axiosClient from "../config/axiosClient";
import { useNavigate } from "react-router-dom";

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userState, dispatch] = useReducer(userReducers, {
    info2: [],
    authStatus: false,
  });

  const [isLoged, setIsLoged] = useState(false);

  const registerUser = async (user) => {
    try {
      const newUser = await axiosClient.post("/user", user);
      if (newUser.data.success) {
        // alert(newUser.data.message)
        console.log(newUser.data.token);
        dispatch({ type: "REGISTER", payload: newUser.data });
        console.log(newUser.data);
      }
      console.log(newUser.data.message);
    } catch (error) {
      dispatch({
        type: "LOGIN_ERROR"
      });
    }
  };

  const loginUser = async (user) => {
    try {
      const newUser = await axiosClient.post("/user/signin", user);
      if (newUser.data.success) {
        // alert(newUser.data.message)
        console.log(newUser.data.token);
        dispatch({ type: "REGISTER", payload: newUser.data });
        setIsLoged(true);
        console.log(newUser.data);
      }
      console.log(newUser.data.message);
    } catch (error) {
      dispatch({
        type: "LOGIN_ERROR"
      });
    }
  };

  const signOut = async () => {
    dispatch({ type: "SIGN_OUT" });
    navigate("/auth");
    console.log(userState);
  };

  const verifyToken = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axiosClient.defaults.headers.common["Authorization"];
    }

    try {
      const respuesta = await axiosClient.get("/user/verify-user");

      dispatch({
        type: "INFO_USER",
        payload: respuesta.data.info,
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_ERROR"
      });
    }
  };

  const userSubmitForm = async (data) => { 
    console.log("hola")
    const result = await axiosClient.put("/user/edit-profile", data)
    console.log(result)
}

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        userState,
        signOut,
        isLoged,
        verifyToken,
        userSubmitForm
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
