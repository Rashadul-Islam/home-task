import React from "react";
import { Link } from "react-router-dom";
import { GiCrossMark } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/postSlice";

const Post = ({ data }) => {
  const dispatch = useDispatch();
  const handleDelte = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-10">
      <GiCrossMark
        onClick={() => handleDelte(data?.id)}
        className="absolute ml-[350px] mt-[-30px] cursor-pointer"
      />
      <Link
        to={`${data?.id}`}
        className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {data.title}
      </Link>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-3">
        {data.body}
      </p>
    </div>
  );
};

export default Post;
