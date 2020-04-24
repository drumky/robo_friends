import React from "react";
import Card from "./Card";
// import robots from "./robots";

const CardList = ({ robots }) => {
  const cardArrays = robots.map((user, i) => {
    return (
      <Card
        key={robots[i].id}
        id={robots[i].id}
        name={robots[i].name}
        username={robots[i].username}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardArrays}</div>;
};

export default CardList;
