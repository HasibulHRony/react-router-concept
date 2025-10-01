import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const postDetailsData = useLoaderData()
    const { title, body} = postDetailsData
    return (
        <div style={{maxWidth: "480px", border: "2px solid yellow", padding: "10px", borderRadius: "10px", margin: "10px"}}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;