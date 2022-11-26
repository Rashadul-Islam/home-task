import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Author from "./Author";
import Comments from "./Comments";

const Details = () => {
  const [postData, setPostData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?id=${id}`
        );
        // Work with the response...
        setPostData(data[0]);
      } catch (err) {
        // The client was given an error response (5xx, 4xx)
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <div>
        <Author user={postData && postData?.userId} />
      </div>
      <div className="m-5">
        <h1 className="text-center font-bold text-lg pt-5">
          {postData?.title}
        </h1>
        <p className="lg:w-[70%] lg:m-auto pt-3">{postData?.body}</p>
      </div>
      <div className="lg:w-[70%] lg:m-auto pt-3">
        <Comments postId={postData?.id} />
      </div>
    </div>
  );
};

export default Details;
