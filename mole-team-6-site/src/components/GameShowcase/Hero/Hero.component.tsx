import React from "react";
import {
    HeroContainer,
    HeroImage,
    Tagline,
    CTAButton,
    InfoList,
    InfoItem,
} from "./Hero.styles";
import { HeroProps } from "./Hero.types";

const Hero: React.FC<HeroProps> = ({ heroImage, tagline, metadata }) => {
    const { genre, platforms, releaseDate, steamUrl, isReleased, price } =
        metadata;

    return (
        <HeroContainer>
            <HeroImage src={heroImage} alt="Game banner" />
            <Tagline>{tagline}</Tagline>

            <CTAButton
                href={steamUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                {isReleased ? `Buy Now ${price ?? ""}` : "Wishlist Now"}
            </CTAButton>

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
