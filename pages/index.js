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
      <meta
        name="keywords"
        content="Magic, Word, Bracelet, Magicwordbracelet, personal, custom"
      />
      <meta
        name="description"
        content="The home of Magic Word Bracelet, a website designed so you can create your own magic word bracelets."
      />
      <meta name="author" content="Harrison Walton" />
      <Grid item xs={12}>
        <HeroImage
          bgImage={"HeroImage2.png"}
          alt={"Image of Lucy wearing a magic word bracelet"}
        >
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
        <HeroImage
          bgImage={"heroCraft.jpg"}
          alt={"Image showing how a magic word bracelet is made"}
        >
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
