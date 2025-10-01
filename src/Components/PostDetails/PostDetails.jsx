import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const postDetailsData = useLoaderData()
    const { title, body} = postDetailsData
    let navigate = useNavigate()

    const navigateHandler = () =>{
        navigate('/posts')
    }
    return (
        <div style={{maxWidth: "480px", border: "2px solid yellow", padding: "10px", borderRadius: "10px", margin: "10px"}}>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={navigateHandler}>Close</button>
        </div>
    );
};

export default PostDetails;