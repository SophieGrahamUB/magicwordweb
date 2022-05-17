import React from "react";
import { TextBody, TextTitle } from "../Text";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CenterCenter } from "../Center";

export const Reviews = () => {
  const review = [
    {
      name: "Rebecca Brade",
      review:
        '"Love my magic word bracelet(s) I have a few now and they really enable you to focus on aims. Seeing it everyday on your wrist is a constant reminder of what you wish to achieve, love it!"',
    },
    {
      name: "Karen Dickinson",
      review:
        '"My daughter word is blossom just the best word and always makes her smile"',
    },
    {
      name: "Matea Matea",
      review: `"Wow! I didn't realise how powerful words are until I got my magic word bracelet. Affirming mine daily really helped shift my mindset. Lucy is such an inspirational person, she truely brings joy and laughter wherever she goes."`,
    },
  ];

  const reviewStyle = {
    review: {
      width: "80%",
      margin: "auto",
    },
  };

  return (
    <CenterCenter>
      <TextTitle title={"Reviews:"} />
      <Carousel
        showArrows={false}
        showIndicators={false}
        interval={8000}
        autoPlay={true}
        showStatus={false}
        dynamicHeight={true}
        swipeable={true}
        infiniteLoop={true}
        showThumbs={false}
        emulateTouch={true}
      >
        {review.map((item) => {
          return (
            <div key={item} style={reviewStyle.review}>
              <TextBody bodyYellow={item.review} />
              <TextBody bodyWhite={`-${item.name}`} />
            </div>
          );
        })}
      </Carousel>
    </CenterCenter>
  );
};
