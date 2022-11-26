import axios from "axios";
import React, { useEffect, useState } from "react";
import AuthorImage from "./AuthorImage";
import { SiGmail } from "react-icons/si";
import { BsTelephone } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";

const Author = ({ user }) => {
  const [authorInfo, setAuthorInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users?id=${user}`
        );
        // Work with the response...
        setAuthorInfo(data[0]);
      } catch (err) {
        // The client was given an error response (5xx, 4xx)
        console.log(err);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div className="m-5">
      <div className="flex items-center justify-center lg:justify-evenly flex-wrap">
        <div className="flex items-center">
          <AuthorImage author={authorInfo?.id} />
          <div>
            <p>{authorInfo?.name}</p>
            <p>{authorInfo?.company?.name}</p>
          </div>
        </div>
        <div className="lg:mt-0 mt-2">
          <p className="flex items-center">
            <SiGmail className="mr-2" />
            {authorInfo?.email}
          </p>
          <p className="flex items-center">
            <BsTelephone className="mr-2" />
            {authorInfo?.phone}
          </p>
          <p className="flex items-center">
            <FaGlobeAmericas className="mr-2" />
            {authorInfo?.website}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Author;
