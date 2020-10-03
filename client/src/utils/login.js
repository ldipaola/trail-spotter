import axios from "axios";

export const login = async (loginEmail, loginPassword) => {
  let authUser = "";
  await axios
    .post("/api/login", {
      email: loginEmail,
      password: loginPassword,
    })
    .then((response) => authUser = response.data)
    .catch((error) => {
      console.log("Error:", error);
    });
    return authUser;
};
