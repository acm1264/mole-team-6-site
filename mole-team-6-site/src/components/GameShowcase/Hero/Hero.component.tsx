import React from "react";
import {
  HeroContainer,
  HeroImage,
  OverlayButtonContainer,
  OverlayButton,
  Tagline,
  InfoList,
  InfoItem,
  Icon,
} from "./Hero.styles";
import { HeroProps } from "./Hero.types";

// Import icons with proper type handling
import * as FaIcons from "react-icons/fa";

const Hero: React.FC<HeroProps> = ({
  heroImage,
  tagline,
  metadata,
  buttonPosition = { top: "1rem", right: "1rem" },
  pressKitUrl,
}) => {
  const {
    genre,
    platforms,
    releaseDate,
    players,
    steamUrl,
    isReleased,
    isDemo,
    price,
  } = metadata;

  // Cast to valid React component types
  const FaSteam = FaIcons.FaSteam as React.ElementType;
  const FaGoogleDrive = FaIcons.FaGoogleDrive as React.ElementType;

  return (
    <HeroContainer>
      <HeroImage $src={heroImage}></HeroImage>
      {isDemo && <h2>Demo Available now!</h2>}
      <OverlayButtonContainer style={{ marginTop: isDemo ? 0 : "1rem" }}>
        {steamUrl && (
          <OverlayButton
            href={steamUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <FaSteam />
            </Icon>
            {isReleased
              ? `Buy Now ${price ?? ""}`
              : isDemo
              ? "Wishlist & Demo"
              : "Wishlist"}
          </OverlayButton>
        )}

        {pressKitUrl && (
          <OverlayButton
            href={pressKitUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <FaGoogleDrive />
            </Icon>
            Press Kit
          </OverlayButton>
        )}
      </OverlayButtonContainer>

      <Tagline>{tagline}</Tagline>

      <InfoList>
        <InfoItem>
          <strong>Genre:</strong> {genre}
        </InfoItem>
        <InfoItem>
          <strong># Players:</strong> {players}
        </InfoItem>
        <InfoItem>
          <strong>Platforms:</strong> {platforms.join(", ")}
        </InfoItem>
        <InfoItem>
          <strong>Release Date:</strong> {releaseDate}
        </InfoItem>
      </InfoList>
    </HeroContainer>
  );
};

export default Hero;
