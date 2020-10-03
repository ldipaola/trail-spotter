import axios from "axios";

export const logout = async () => {
  let logout = "";
  await axios
    .get("/logout")
    .then((response) => logout = response.data)
    .catch((error) => {
      console.log("Error:", error);
    });
    return logout;
};