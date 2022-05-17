import React from "react";
import { Box } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { Linker } from "../Linker";
import DrawerRight from "../DrawerRight";

export const Navbar = ({ children }) => {
  const styles = {
    appBar: {
      position: "sticky",
      position: "-webkit-sticky",
      backgroundColor: "black",
    },
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={styles.appBar}>
          <Toolbar>
            <Linker target="/">
              <Typography
                variant="h6"
                component="div"
                display="inline-block"
                sx={{ flexGrow: 1 }}
                color="#FFBC59"
              >
                MWB
              </Typography>
            </Linker>
            <Grid
              container
              direction="row"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Grid item xs={4} />
              <Grid item xs={2}>
                <Linker target="/">
                  <Button
                    varient={"text"}
                    sx={{
                      color: "#FFBC59",
                      "&:hover": {
                        backgroundColor: "#FFBC59",
                        color: "black",
                      },
                    }}
                  >
                    Home
                  </Button>
                </Linker>
              </Grid>{" "}
              <Grid item xs={2}>
                <Linker target="/magic10">
                  <Button
                    variant={"text"}
                    sx={{
                      color: "#FFBC59",
                      "&:hover": {
                        backgroundColor: "#FFBC59",
                        color: "black",
                      },
                    }}
                  >
                    The Magic 10
                  </Button>
                </Linker>
              </Grid>{" "}
              <Grid item xs={2}>
                <Linker target="/about">
                  <Button
                    variant={"text"}
                    sx={{
                      color: "#FFBC59",
                      "&:hover": {
                        backgroundColor: "#FFBC59",
                        color: "black",
                      },
                    }}
                  >
                    About me
                  </Button>
                </Linker>
              </Grid>{" "}
              <Grid item xs={2}>
                <Linker target="/shop">
                  <Button
                    variant={"text"}
                    sx={{
                      color: "#FFBC59",
                      "&:hover": {
                        backgroundColor: "#FFBC59",
                        color: "black",
                      },
                    }}
                  >
                    Shop
                  </Button>
                </Linker>
              </Grid>
            </Grid>
            <Box sx={{ marginLeft: "auto" }}>
              <DrawerRight />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
};
