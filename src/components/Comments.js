import axios from "axios";
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
const Comments = ({ postId }) => {
  const [getComments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        );
        // Work with the response...
        setComments(data);
      } catch (err) {
        // The client was given an error response (5xx, 4xx)
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div>
      {getComments?.map((data) => (
        <Comment key={data?.id} data={data} />
      ))}
    </div>
  );
};

export default Comments;
