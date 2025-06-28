import React from "react";
import {
    DetailsSection,
    Logo,
    TrailerWrapper,
    SectionBlock,
    SectionTitle,
    SectionContent,
} from "./Details.styles";
import { DetailsProps } from "./Details.types";

const Details: React.FC<DetailsProps> = ({
    logo,
    trailerEmbedUrl,
    sections,
}) => {
    return (
        <DetailsSection>
            <Logo src={logo} alt="Game Logo" />

            <TrailerWrapper>
                <iframe
                    src={trailerEmbedUrl}
                    title="Game Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </TrailerWrapper>

            {sections.map((section, index) => (
                <SectionBlock key={index}>
                    <SectionTitle>{section.title}</SectionTitle>
                    <SectionContent>{section.content}</SectionContent>
                </SectionBlock>
            ))}
        </DetailsSection>
    );
};

export default Details;
