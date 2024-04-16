import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((gId) => {
        if (!genres[gId]?.name) return;
        return <div key={gId} className="genre">{genres[gId]?.name}</div>;
      })}
    </div>
  );
};

export default Genres;
