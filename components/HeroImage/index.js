import React from "react";
import { Box } from "@mui/system";

export const HeroImage = ({ bgImage, children }) => {
  const styles = {
    heroContainer: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./${bgImage}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      height: 425,
      width: "100%",
    },
  };
  return <Box sx={styles.heroContainer}>{children}</Box>;
};

export const HeroImageClean = ({ bgImage, children }) => {
  const styles = {
    heroContainer: {
      backgroundImage: `url('./${bgImage}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      height: 425,
      width: "100%",
    },
  };

  return <Box sx={styles.heroContainer}>{children}</Box>;
};

export const SmallImageMagic10 = ({ bgImage, children }) => {
  const styles = {
    heroContainer: {
      backgroundImage: `url('./${bgImage}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      height: 500,
      width: 354,
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  };
  return <Box sx={styles.heroContainer}>{children}</Box>;
};
