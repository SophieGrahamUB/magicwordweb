import { Grid, Button } from "@mui/material";
import React from "react";
import { CenterCenter } from "../components/Center";
import { HeroImage } from "../components/HeroImage";
import { Spacer, SpacerXs } from "../components/Spacer";
import { TextTitle } from "../components/Text";
import { Linker } from "../components/Linker";

function magicDrinkDecaf() {
  return (
    <Grid container>
      <SpacerXs />
      <HeroImage bgImage={"/ketones.webp"}>
        <TextTitle
          title="De-Caffeinated Magic"
          subtitle="Feel great, be great!"
        />
      </HeroImage>
      <Grid item xs={12}>
        <Spacer>
          <Grid container height="100%">
            <Grid item xs={12}>
              <CenterCenter>
                <Linker target="https://www.paypal.com/instantcommerce/checkout/2X4Q55LXK8WW2">
                  <Button
                    varient="contained"
                    style={{ backgroundColor: "#FFBC59", color: "white" }}
                  >
                    5 Day Trial
                  </Button>
                </Linker>
              </CenterCenter>
            </Grid>
            <Grid item xs={12}>
              <CenterCenter>
                <Linker target="https://www.paypal.com/instantcommerce/checkout/AS9P2CUC5EBS2">
                  <Button
                    varient="contained"
                    style={{ backgroundColor: "#FFBC59", color: "white" }}
                  >
                    3 Day Trial
                  </Button>
                </Linker>
              </CenterCenter>
            </Grid>
          </Grid>
        </Spacer>
      </Grid>
    </Grid>
  );
}

export default magicDrinkDecaf;
