import React from "react";
import { Link } from "@mui/material";

export const Linker = ({ children, target }) => {
  return (
    <>
      <Link
        href={target}
        sx={{ textDecoration: "none", color: "#FFBC59", cursor: "pointer" }}
      >
        {" "}
        {children}
      </Link>
    </>
  );
};

export const LinkerNewTab = ({ children, target }) => {
  return (
    <>
      <Link href={target} target="_blank">
        {children}
      </Link>
    </>
  );
};
