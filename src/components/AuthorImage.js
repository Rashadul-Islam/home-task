import axios from "axios";
import React, { useEffect, useState } from "react";

const AuthorImage = ({ author }) => {
  const [authorImage, setAuthorImage] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?id=${author}`
        );
        // Work with the response...
        setAuthorImage(data[0]);
      } catch (err) {
        // The client was given an error response (5xx, 4xx)
        console.log(err);
      }
    };
    fetchData();
  }, [author]);

  return (
    <div>
      <img className="h-[60px] rounded mr-3" src={authorImage?.thumbnailUrl} alt="" />
    </div>
  );
};

export default AuthorImage;
