import { Grid } from "@mui/material";
import React from "react";
import { DropDown } from "../components/DropDown";
import { SpacerL } from "../components/Spacer";
import { TextTitle } from "../components/Text";
import { HeroImage } from "../components/HeroImage";

const shop = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <HeroImage bgImage={"heroCraft.jpg"}>
          <TextTitle
            title={"Make Your Magic"}
            subtitle={"Customise your bracelet"}
          />
        </HeroImage>
        <SpacerL bgcolor={"#363636"}>
          <DropDown />
        </SpacerL>
      </Grid>
    </Grid>
  );
};
export default shop;
