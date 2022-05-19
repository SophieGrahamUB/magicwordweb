import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Center } from "../Center";
import { Linker } from "../Linker";
import { TextBody } from "../Text";

export const DropDown = () => {
  const styles = {
    textInput: {
      outline: "none",
      border: "none",
      borderBottom: "1px solid #FFBC59",
      color: "white",
      backgroundColor: "#363636",
      width: "70%",
      textAlign: "center",
      fontSize: "40px",
      placeholder: "Your Magic Word(s)",
    },
    dropDown: {
      outline: "none",
      border: "none",
      borderBottom: "1px solid #FFBC59",
      color: "white",
      backgroundColor: "#363636",
      width: "20%",
      textAlign: "center",
      fontSize: "20px",
      placeholder: "Your Magic Word(s)",
    },
  };

  const [orderDetails, setOrderDetails] = useState();
  const [topText, setTopText] = useState();
  const [bottomText, setBottomText] = useState();
  const [ringColor, setRingColor] = useState("Brass");
  const [strapColor, setStrapColor] = useState("Black");

  useEffect(() => {
    const item = localStorage.setItem("Basket", orderDetails);
  }, [orderDetails]);

  return (
    <Center>
      <form>
        <br />
        <br />
        <TextBody bodyYellow={"Top word(s)"} />
        <input
          style={styles.textInput}
          onChange={(e) => setTopText(e.target.value)}
        ></input>
        <br />
        <br />
        <TextBody bodyYellow={"Bottom word(s)"} />
        <input
          style={styles.textInput}
          onChange={(e) => setBottomText(e.target.value)}
        ></input>
        <br />
        <br />

        <TextBody bodyYellow={"Ring Color"} />
        <select
          style={styles.dropDown}
          onChange={(e) => setRingColor(e.target.value)}
        >
          {/* <option value={"Brass"}>Brass</option>
          <option value={"Nickel"}>Nickel</option> */}
          <option value={"Black"}>Black</option>
          <option value={"Rose Gold"}>Rose Gold</option>
        </select>
        <br />
        <br />
        <TextBody bodyYellow={"String Color"} />
        <select
          style={styles.dropDown}
          onChange={(e) => setStrapColor(e.target.value)}
        >
          <option value={"Black"}>Black</option>
          <option value={"Cream"}>Cream</option>
          <option value={"Red"}>Red</option>
          <option value={"Blue"}>Blue</option>
          <option value={"Purple"}>Purple</option>
        </select>
        <br />
        <br />
      </form>
      <Linker target={"checkout"}>
        <Button
          varient="contained"
          style={{ backgroundColor: "#FFBC59", color: "white" }}
          onClick={() =>
            setOrderDetails(
              `Top Text: ${topText}.
             Bottom Text: ${bottomText}. 
             Ring Colour: ${ringColor}. 
             Strap Colour: ${strapColor}.`
            )
          }
        >
          Checkout
        </Button>
      </Linker>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Center>
  );
};
