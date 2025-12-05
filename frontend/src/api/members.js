import axios from "axios";

export const getMembersAPI = async () => {
  return await axios.get("http://localhost:5000/api/fetch-members", {
    withCredentials: true,
  });
};