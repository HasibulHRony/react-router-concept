import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    
    return (
        <div style={{border: "2px solid red", borderRadius: "10px", margin: "6px", padding: "10px"}}>
            <p>PostID: {post.id}</p>
            <h2>Post Title: {post.title}</h2>
            <Link to={`/posts/${post.id}`}><button>Post Details</button></Link>
        </div>
    );
};

export default Post;