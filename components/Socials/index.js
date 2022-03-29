import { Grid } from "@mui/material";
import React from "react";
import { Linker, LinkerNewTab } from "../Linker";

export const Socials = () => {
  let socials = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/magicwordbracelet",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/magicwordbracelet/",
    },
  ];

  const styles = {
    image: {
      height: "100%",
      width: "100%",
      opacity: 0.5,
    },
  };

  return (
    <Grid container spacing={12}>
      {socials.map((i) => (
        <Grid item xs={6} key={i.name}>
          <LinkerNewTab target={i.link}>
            <img
              onMouseEnter={(e) => (
                (e.target.style.opacity = 1), (e.target.style.width = "150%")
              )}
              onMouseLeave={(e) => (
                (e.target.style.opacity = 0.5), (e.target.style.width = "100%")
              )}
              style={styles.image}
              src={`./${i.name}.svg`}
            />
          </LinkerNewTab>
        </Grid>
      ))}
    </Grid>
  );
};
