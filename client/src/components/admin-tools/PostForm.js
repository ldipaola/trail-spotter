import React, {useState} from "react";


export default function PostForm() {

  const [post, setPost] = useState({
    author: "",
    title: "",
    body: ""
  });

  const handleChange = function (e) {
    const value = e.target.value;
    if (e.target.id === "input-author" )  {
      setPost({...post, author: value })
    }
    if (e.target.id === "input-title" )  {
      setPost({...post, title: value })
    }
    if (e.target.id === "input-message" )  {
      setPost({...post, body: value })
    }
  };

  const handleSubmit = async function(e) {
    e.preventDefault();
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(post)
      });
      console.log(response);

      Array.from(document.querySelectorAll("input, textarea")).forEach(
        input => (input.value = "")
      );

      setPost({
        author: "",
        title: "",
        body: ""
      });
    
    }
    catch (err) {
      console.log(err);
    }
  
  };
  return (
   <form onSubmit={handleSubmit}>
      <div className="form-group" >
    <label className="form-label" htmlFor="input-author">Author</label>
    <input className="form-input" type="text" id="input-author" placeholder="Author" onChange={handleChange}/>
    <label className="form-label" htmlFor="input-title">Title</label>
    <input className="form-input" type="text" id="input-title" placeholder="Title"  onChange={handleChange} />
    <label className="form-label" htmlFor="input-message">Message</label>
    <textarea className="form-input" id="input-message" placeholder="" rows="4"  onChange={handleChange}></textarea>
    <button className="btn btn-primary" style={{margin: "4px 4px 0 0"}}>Post</button>
  </div>
   </form>
  );
}