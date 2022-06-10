import React from "react";

export const Spacer = ({ children }) => {
  return (
    <div style={{ width: "100vw", height: "40vh", backgroundColor: "black" }}>
      {children && children}
    </div>
  );
};

export const SpacerM = ({ children }) => {
  return (
    <div style={{ width: "100vw", height: "30vh", backgroundColor: "black" }}>
      {children && children}
    </div>
  );
};

export const SpacerSm = ({ children }) => {
  return (
    <div style={{ width: "100%", height: "20vh", backgroundColor: "black" }}>
      {children && children}
    </div>
  );
};

export const SpacerXs = ({ children }) => {
  return (
    <div style={{ width: "100%", height: "10vh", backgroundColor: "black" }}>
      {children && children}
    </div>
  );
};

export const SpacerL = ({ children, bgcolor }) => {
  return (
    <div style={{ width: "100%", height: "60vh", backgroundColor: bgcolor }}>
      {children && children}
    </div>
  );
};

export const SpacerXL = ({ children }) => {
  return (
    <div style={{ width: "100%", height: "90vh", backgroundColor: "black" }}>
      {children && children}
    </div>
  );
};
