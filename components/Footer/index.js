import React from "react";
import { Grid, Typography } from "@mui/material";
import { TextBody } from "../Text";
import { CenterCenter, Center } from "../Center";
import { Socials } from "../Socials";

export const Footer = ({ children }) => {
  const styles = {
    footer: {
      backgroundColor: "#1E1E1E",
      width: "100%",
      height: "20vh",
      textAlign: "center",
    },
  };

  return (
    <Grid container>
      <Grid item xs={6} style={styles.footer}>
        <CenterCenter>
          <TextBody bodyWhite={"Having issues? Contact us:"} />
          <TextBody bodyYellow={"Email: lucy@loubylou.co.uk"} />
        </CenterCenter>
      </Grid>
      <Grid item xs={6} style={styles.footer}>
        <CenterCenter>
          <TextBody bodyWhite={"Socials:"} />
          <Socials />
        </CenterCenter>
      </Grid>
    </Grid>
  );
};
