import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { HeroImage } from "../components/HeroImage";
import { Center, CenterCenter } from "../components/Center";
import { Spacer } from "../components/Spacer";
import { TextTitle } from "../components/Text";
import { Reviews } from "../components/Reviews";
import { Linker } from "../components/Linker";

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <HeroImage bgImage={"HeroImage2.png"}>
          <TextTitle
            title={"Magic Word Bracelet"}
            subtitle={"Your Words, Your Magic"}
          />
        </HeroImage>
      </Grid>
      <Spacer>
        <Reviews />
      </Spacer>
      <Grid item xs={12}>
        <HeroImage bgImage={"heroCraft.jpg"}>
          <CenterCenter>
            <TextTitle title={"Get Your Magic"} />
            <Center>
              <Linker target="/shop">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#FFBC59" }}
                >
                  Shop now
                </Button>
              </Linker>
            </Center>
          </CenterCenter>
        </HeroImage>
      </Grid>
    </Grid>
  );
}
