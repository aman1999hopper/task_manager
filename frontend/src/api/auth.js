import api from "./axios";

export const loginUser = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
};

export const registerUser = async (name, email, password, avatar) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (avatar) {
      formData.append("avatar", avatar);
    }
  
    const res = await api.post("/auth/register", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  
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
