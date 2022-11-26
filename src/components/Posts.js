import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { getPost } from "../redux/postSlice";

const Posts = () => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const getPostData = useSelector((state) => state.posts.posts);

  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // Work with the response...
        dispatch(getPost(data.slice(0, 20)));
        setloading(false);
      } catch (err) {
        // The client was given an error response (5xx, 4xx)
        console.log(err);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading ? (
        <div className="w-full h-full flex items-center justify-center text-lg">
          loading....
        </div>
      ) : (
        <div className="flex flex-wrap justify-between m-10">
          {getPostData?.map((data) => (
            <Post key={data.id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
