import axiosPublic from ".";

export const login = async (email, password) => {
  const {data} = await axiosPublic.post("/auth/login", {
    email,
    password,
  });
  return data;
};