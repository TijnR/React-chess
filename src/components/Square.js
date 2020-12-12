import React from "react";

const Square = (props) => {
  console.log(props);
  return (
    <div className={props.data.class} id={props.data.id}>
      {props.data.id}
    </div>
  );
};

export default Square;
