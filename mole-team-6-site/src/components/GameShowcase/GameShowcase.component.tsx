import React from "react";
import { GameShowcaseProps } from "./GameShowcase.types";
import Hero from "./Hero/Hero.component";
import Details from "./Details/Details.component";
import Gallery from "./Gallery/Gallery.component";

const GameShowcase: React.FC<GameShowcaseProps> = ({
  hero,
  details,
  gallery,
}) => {
  return (
    <>
      <Hero {...hero} />
      <Gallery {...gallery} />
      <Details {...details} />
    </>
  );
};

export default GameShowcase;
