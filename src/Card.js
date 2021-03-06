import React from "react";

const Card = ({ id, name, username, email }) => {
  return (
    <div className="bg-light-blue dib div br4 pa3 ma2 grow bw-2 shadow-5 tc">
      <img src={`https://robohash.org/${id}?200x200`} alt="robo" />
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
