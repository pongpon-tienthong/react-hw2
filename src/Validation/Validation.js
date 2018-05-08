import React from "react";

const validation = (props) => {
  
  let message = 'Text too short!';   
  if(props.textLength > 5) {
    message = 'Text too long!';  
  }

  return (
    <p>{message}</p>
  );
}

export default validation;