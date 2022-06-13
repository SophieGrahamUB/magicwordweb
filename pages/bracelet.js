import { Grid } from "@mui/material";
import React from "react";
import { DropDown } from "../components/DropDown";
import { SpacerL, SpacerSm } from "../components/Spacer";
import { TextBody, TextTitle } from "../components/Text";
import { HeroImage } from "../components/HeroImage";
import { CenterCenter } from "../components/Center";

const shop = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <HeroImage bgImage={"heroCraft.webp"}>
          <TextTitle
            title={"Make Your Magic"}
            subtitle={"Customise your bracelet"}
          />
        </HeroImage>
        <SpacerL bgcolor={"#363636"}>
          <DropDown />
        </SpacerL>
        <SpacerSm>
          <CenterCenter>
            <TextBody
              bodyWhite={
                "We're currently low on stock for most colours, apologies! We'll get this sorted soon!"
              }
            ></TextBody>
          </CenterCenter>
        </SpacerSm>
      </Grid>
    </Grid>
  );
};
export default shop;
