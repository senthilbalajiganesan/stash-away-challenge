import React from "react";

export default (props: any) => {
  return (
    <div className="card">
      {Object.keys(props.details).map((key, index) => (
        <p key={index}>
          {key} : {props.details[key]}
        </p>
      ))}
    </div>
  );
};
