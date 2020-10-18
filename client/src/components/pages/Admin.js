import React, {useState} from "react";
import PostForm from "../admin-tools/PostForm";




export default function Admin() {
    const [component, setComponent] = useState(PostForm);

  return (
    <div className="container grid-lg">
        <div className="columns">
            <div className="column col-4">
            <ul style={{listStyle: "none"}}>
          <li><button style={{width: "180px"}}  className="btn">New Post</button></li>
          <li><button style={{width: "180px"}} className="btn" >Edit and Delete posts</button></li>
          <li><button style={{width: "180px"}} className="btn">Manage Markers</button></li>
          <li><button style={{width: "180px"}} className="btn">Users</button></li>
      </ul>
            </div>
            <div className="column col-8">
              <PostForm />
      </div>
        </div>
    </div>
  );
}
