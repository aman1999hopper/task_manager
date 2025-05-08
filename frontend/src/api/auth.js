import api from "./axios";

export const loginUser = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
};

export const registerUser = async (name, email, password) => {
  const res = await api.post("/auth/register", { name, email, password });
  return res.data;
};

export const getUser = async () => {
  const token = localStorage.getItem("token");
  const res = await api.get("/auth/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
