import React from "react";

const Index = ({ name, type, placeholder, change, clas, ...rest }) => {
  return (
    <input
      className={`input ${clas}`}
      placeholder={placeholder}
      name={name}
      type={type}
      {...rest}
    />
  );
};

export default Index;
