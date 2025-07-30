import React from "react";
import {
  HeroContainer,
  HeroImage,
  OverlayButtonContainer,
  OverlayButton,
  Tagline,
  InfoList,
  InfoItem,
  Icon
} from "./Hero.styles";
import { HeroProps } from "./Hero.types";

// Import icons with proper type handling
import * as FaIcons from "react-icons/fa";

const Hero: React.FC<HeroProps> = ({
  heroImage,
  tagline,
  metadata,
  buttonPosition = { top: "1rem", right: "1rem" },
  pressKitUrl
}) => {
  const { genre, platforms, releaseDate, steamUrl, isReleased, price } = metadata;

  // Cast to valid React component types
  const FaSteam = FaIcons.FaSteam as React.ElementType;
  const FaGoogleDrive = FaIcons.FaGoogleDrive as React.ElementType;

  return (
    <HeroContainer>
      <HeroImage $src={heroImage}>
        <OverlayButtonContainer style={buttonPosition}>
          {steamUrl && (
            <OverlayButton
              href={steamUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <FaSteam />
              </Icon>
              {isReleased ? `Buy Now ${price ?? ""}` : "Wishlist"}
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
      </HeroImage>

      <Tagline>{tagline}</Tagline>

      <InfoList>
        <InfoItem>
          <strong>Genre:</strong> {genre}
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
