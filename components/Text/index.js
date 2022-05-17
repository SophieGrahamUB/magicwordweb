import React from "react";
import { CenterCenter } from "../Center";
import { Typography } from "@mui/material";

export const TextTitle = ({ title, subtitle }) => {
  return (
    <>
      <CenterCenter>
        <Typography
          sx={{ fontSize: { xs: 30, md: 50 } }}
          variant="h3"
          fontWeight="900"
          color="white"
        >
          {title && title}
        </Typography>
        <Typography color="#FFBC59">{subtitle && subtitle}</Typography>
      </CenterCenter>
    </>
  );
};

export const TextBody = ({ bodyWhite, bodyYellow }) => {
  return (
    <>
      <Typography color="white">{bodyWhite && bodyWhite}</Typography>
      <Typography sx={{ fontSize: { xs: 12, md: 15 } }} color="#FFBC59">
        {bodyYellow && bodyYellow}
      </Typography>
    </>
  );
};
