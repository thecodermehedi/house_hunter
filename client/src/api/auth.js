import axiosPublic from ".";
// import axiosSecure from "./axiosSecure";

export const getToken = async (email) => {
  const {data} = await axiosPublic("/auth/jwt", {email});
  return data;
};
