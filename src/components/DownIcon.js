import React, { Component } from "react";

const DownIcon = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "-30px",
        transform: "translateY(-45px)",
      }}
    >
      <img src={props.icon} alt="down" style={{ maxWidth: "30px" }} />
    </div>
  );
};

export default DownIcon;
