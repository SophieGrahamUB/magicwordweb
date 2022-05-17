import { Grid } from "@mui/material";
import React from "react";
import { Center } from "../components/Center";
import { PayPalCheckoutButton } from "../components/PayPal";
import { SpacerSm, Spacer } from "../components/Spacer";
import { TextTitle } from "../components/Text";

const checkout = () => {
  const getBasket = () => {
    if (typeof window !== "undefined") {
      let basket = localStorage.getItem("Basket");
      return basket;
    }
  };

  let product = {
    description: getBasket(),
  };
  return (
    <Grid container backgroundColor="black">
      <Grid item xs={12} backgroundColor="black">
        <SpacerSm />
        <SpacerSm>
          <TextTitle title={"Get Your Magic"} subtitle={"Place your order!"} />
        </SpacerSm>
        <Spacer bgcolor={"#363636"}>
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={8}>
              <Center>
                <PayPalCheckoutButton product={product} />
              </Center>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Spacer>
      </Grid>
    </Grid>
  );
};

export default checkout;
