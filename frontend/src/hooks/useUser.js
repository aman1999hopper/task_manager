import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("No token found.");
      return;
    }

    fetch("http://localhost:5000/api/auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then((data) => {
        if (data.user) {
          setUser({
            name: data.user.name,
            avatar: data.user.avatar || "https://www.w3schools.com/w3images/avatar2.png",
          });
        }
      })
      .catch((err) => {
        console.error("User fetch failed:", err.message);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, []);

  return user;
};

export default useUser;
