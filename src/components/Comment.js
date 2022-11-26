import React from "react";
import { FaUser } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Comment = ({ data }) => {
  return (
    <div className="lg:mt-0 mt-2 mb-8 m-3">
      <p className="flex items-center">
        <FaUser className="mr-2" />
        {data?.name}
      </p>
      <p className="flex items-center">
        <SiGmail className="mr-2" />
        {data?.email}
      </p>
      <div className="border rounded p-3 mt-2">
        <p>{data?.body}</p>
      </div>
    </div>
  );
};

export default Comment;
