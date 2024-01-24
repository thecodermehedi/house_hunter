import {createContext, useEffect, useState} from "react";
import {login} from "@/api/user";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  const loginUser = async (email, password) => {
    try {
      setIsUserLoading(true);
      const res = await login(email, password);
      if (res.success) {
        localStorage.setItem("user", JSON.stringify(res.user));
        localStorage.setItem("token", res.token);
      }
      setIsUserLoading(false);
      return res;
    } catch (error) {
      console.error(error);
      setIsUserLoading(false);
      return error.response.data;
    }
  };

  const logoutUser = () => {
    setIsUserLoading(true);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    setIsUserLoading(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      return setUser(JSON.parse(user));
    }
    if (!token || !user) {
      setUser(null);
    }
    console.log("user --->", user);
    setIsUserLoading(false);
  }, [user]);

  const values = {
    user,
    loginUser,
    logoutUser,
    isUserLoading,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export {AuthContext, AuthProvider};
