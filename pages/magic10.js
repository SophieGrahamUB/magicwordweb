import React from "react";
import { Spacer, SpacerSm } from "../components/Spacer";
import { HeroImageClean, SmallImageMagic10 } from "../components/HeroImage";
import { TextTitle } from "../components/Text";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { CenterCenter, Center } from "../components/Center";

const magic10 = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenPopup = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <SpacerSm />
      <HeroImageClean bgImage="magic10.png"></HeroImageClean>
      <Spacer>
        <CenterCenter>
          <TextTitle title={"Become the better you"} />
          <Center>
            <Button
              variant="contained"
              style={{ backgroundColor: "#FFBC59" }}
              onClick={() => handleOpenPopup()}
            >
              Find out more
            </Button>
          </Center>
        </CenterCenter>
      </Spacer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{ backgroundColor: "#1E1E1E" }}>
          <SmallImageMagic10 bgImage={"magic10info.png"} />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#1E1E1E" }}>
          <Button onClick={handleClose} sx={{ color: "#FFBC59" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default magic10;
