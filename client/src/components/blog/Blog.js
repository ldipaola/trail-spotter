import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import UserContext from "../../utils/UserContext";


export default function Blog() {
  const { user } = useContext(UserContext);
  let renderPosts = "";
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await axios.get("/api/blog");
        console.log(posts.data);
        setPosts(posts.data.posts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  if (posts){
    renderPosts = posts.map(post =>
    <div key={post.id} className="card" style={{borderStyle: "none"}}>
        <div className="card-image">
          
        </div>
        <div className="card-header">
          <div className="card-title h5">{post.title}</div>
    <div className="card-subtitle text-gray">By: {post.author} {moment(post.date).format('dddd, D MMMM YYYY')}</div>
        </div>
        <div className="card-body">
          <p>
            {post.body}
          </p>
        </div>
        <div className="card-footer">
        </div>
      </div>
  ) 
  } else {
       renderPosts = (<div className="container grid-lg" style={{marginTop: "2em"}}>
    <h1>Test Post</h1>
    <h3></h3>
    <p>
      Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
      Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
      dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
      sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
      sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
      vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
      libero. Class aptent taciti sociosqu ad litora torquent per conubia
      nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
      lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
      in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
      bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
      est ligula suscipit velit, sed bibendum turpis dui in sapien.
    </p>
  </div>)
  }

  return (
    <div className="container grid-lg" style={{marginTop: "2em"}}> 
    <h1>Welcome</h1>
    <p>
      Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
      Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
      dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
      sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
      sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
      vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
      libero. Class aptent taciti sociosqu ad litora torquent per conubia
      nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
      lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
      in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
      bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
      est ligula suscipit velit, sed bibendum turpis dui in sapien.
    </p> 
    { user?
    <Link to="/map" className="btn">
          Get started
        </Link> : <Link to="/login" className="btn">
          Get started
        </Link> }
    {renderPosts}
    </div>
  );
}
