import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";
import Blog from "../blog/Blog";

export default function Home(props) {
  const { user } = useContext(UserContext);

  return (
    <>
    <Blog />
    </>
  );
}
