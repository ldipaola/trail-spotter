import React, {useState, useEffect} from "react";


export default function User(props) {

const [user, setUserData] = useState({})
    
    useEffect(() => {
        fetch("/api/user_data").then((response) => response.json())
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