import { Grid, Button } from "@mui/material";
import React from "react";
import { CenterCenter } from "../components/Center";
import { HeroImage } from "../components/HeroImage";
import { Spacer, SpacerXs } from "../components/Spacer";
import { TextTitle } from "../components/Text";
import { Linker } from "../components/Linker";

const magicDrinkCaff = () => {
  return (
    <Grid container>
      <SpacerXs />
      <HeroImage bgImage={"/ketones.png"}>
        <TextTitle
          title="Caffeinated Magic"
          subtitle="Full of energy and ketone goodness!"
        />
      </HeroImage>
      <Grid item xs={12}>
        <Spacer>
          <Grid container height="100%">
            <Grid item xs={12}>
              <CenterCenter>
                <Linker target="https://www.paypal.com/instantcommerce/checkout/ZFL268L3VWNTN">
                  <Button
                    varient="contained"
                    style={{ backgroundColor: "#FFBC59", color: "white" }}
                  >
                    10 Day Trial
                  </Button>
                </Linker>
              </CenterCenter>
            </Grid>

            <Grid item xs={12}>
              <CenterCenter>
                <Linker target="https://www.paypal.com/instantcommerce/checkout/7UQESTNN39F4A">
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
                <Linker target="https://www.paypal.com/instantcommerce/checkout/9KFA49G5EMFR4">
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
};

export default magicDrinkCaff;
