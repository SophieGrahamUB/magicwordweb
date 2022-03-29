import { Grid } from "@mui/material";
import React from "react";
import { SpacerXs } from "../components/Spacer";
import { TextTitle } from "../components/Text";
import { HeroImage } from "../components/HeroImage";
import { Linker } from "../components/Linker";

const magicdrink = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <SpacerXs />
      </Grid>
      <Grid item xs={12}>
        <Linker target="/magicDrinkCaff">
          <HeroImage bgImage={"ketones.png"}>
            <TextTitle title="Caffinated" subtitle={"Shop now!"} />
          </HeroImage>
        </Linker>
      </Grid>
      <Grid item xs={12}>
        <SpacerXs />
      </Grid>
      <Grid item xs={12}>
        <Linker target="/magicDrinkDecaf">
          <HeroImage bgImage={"decafKetones.png"}>
            <Grid container height="100%">
              <Grid item xs={12}>
                <TextTitle title="Decaf" subtitle={"Shop now!"} />
              </Grid>
            </Grid>
          </HeroImage>
        </Linker>
      </Grid>
    </Grid>
  );
};

export default magicdrink;
