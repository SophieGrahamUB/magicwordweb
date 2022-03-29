import { Button, getListItemAvatarUtilityClass, Grid } from "@mui/material";
import React, { useState } from "react";
import { Center, CenterCenter } from "../components/Center";
import { PayPalCheckoutButton } from "../components/PayPal";
import { SpacerL, SpacerSm, SpacerXL, Spacer } from "../components/Spacer";
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
    <Grid container>
      <Grid item xs={12}>
        <SpacerSm />
        <SpacerSm>
          <TextTitle title={"Get Your Magic"} subtitle={"Place your order!"} />
        </SpacerSm>
        <Spacer bgcolor={"#363636"}>
          <CenterCenter>
            <PayPalCheckoutButton product={product} />
          </CenterCenter>
        </Spacer>
      </Grid>
    </Grid>
  );
};

export default checkout;
