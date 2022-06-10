import React from "react";
import { Center } from "../components/Center";
import { HeroImage } from "../components/HeroImage";
import { SpacerM, SpacerXs, Spacer, SpacerSm } from "../components/Spacer";
import { TextTitle, TextMargin } from "../components/Text";
const about = () => {
  return (
    <>
      <HeroImage bgImage={"heroAbout.webp"}>
        <TextTitle
          title={"About Me"}
          subtitle={"Let's get to know each other"}
        />
      </HeroImage>
      <SpacerSm>
        <TextTitle title={"Hi! I'm Lucy!"} />
      </SpacerSm>
      <SpacerM>
        <Center>
          <TextMargin
            body={
              "Founder of Magic Word Bracelet! For the longest time i've always believed in magic. I think that's why I'm also a clown! Magic can come in so many different forms that it's hard to put a pin in what magic really means. But to me, that's the beauty of it. Magic is subjective! It's what YOU think magic is. That's why I came up with Magic Word Bracelet! It's YOUR magic, YOUR words, YOUR way!"
            }
          />
        </Center>
      </SpacerM>
    </>
  );
};
export default about;
