import React, {useState, useEffect} from "react";
import axios from "axios";


export default function User() {

const [user, setUserData] = useState({})
    
    useEffect(() => {
        axios.get("/api/user_data")
      .then((data) => {
        console.log(data);
        setUserData(data);

    });
    }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <p>
        {user.id}
        <br/>
        {user.email}
      </p>
      <p>
        
      </p>
    </div>
  );
}