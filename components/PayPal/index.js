import { PayPalButtons } from "@paypal/react-paypal-js";
import { Linker } from "../Linker";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export const PayPalCheckoutButton = (props) => {
  const { product } = props;

  const [open, setOpen] = React.useState(false);

  const handleOpenPopup = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: "GBP",
                  value: 19,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log("order", order);
          handleOpenPopup();
        }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{ backgroundColor: "#1E1E1E", color: "white" }}
          id="alert-dialog-title"
        >
          {"Thank you for your purchase!"}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#1E1E1E" }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "#FFBC59" }}
          >
            Have any questions? Feel free to contact me via the email provided
            below!
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#1E1E1E" }}>
          <Linker target="/">
            <Button onClick={handleClose} sx={{ color: "#FFBC59" }}>
              Close
            </Button>
          </Linker>
        </DialogActions>
      </Dialog>
    </>
  );
};
