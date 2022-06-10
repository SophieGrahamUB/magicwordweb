import { Button, Grid } from "@mui/material";
import React from "react";
import { Center } from "../components/Center";
import { Spacer, SpacerXs } from "../components/Spacer";
import { TextTitle } from "../components/Text";
import { HeroImage } from "../components/HeroImage";
import { Linker } from "../components/Linker";

const shop = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <HeroImage bgImage={"heroCraft.webp"}>
          <Grid container height="100%">
            <Grid item xs={12}>
              <TextTitle
                title={"Design Your Bracelet"}
                subtitle={"£19 with free postage!"}
              />
            </Grid>
            <Grid item xs={12}>
              <Center>
                <Linker target="/bracelet">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#FFBC59" }}
                  >
                    Get Creative
                  </Button>
                </Linker>
              </Center>
            </Grid>
          </Grid>
        </HeroImage>
        <Spacer bgcolor={"#363636"}>
          {" "}
          <Grid container height="100%">
            <Grid item xs={12}>
              <TextTitle
                title={"Get your Magic Drink"}
                subtitle={"Check out our range!"}
              />
            </Grid>
            <Grid item xs={12}>
              <Center>
                <Linker target="/magicdrink">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#FFBC59" }}
                  >
                    Browse now
                  </Button>
                </Linker>
              </Center>
            </Grid>
          </Grid>
        </Spacer>
      </Grid>
    </Grid>
  );
};
export default shop;
