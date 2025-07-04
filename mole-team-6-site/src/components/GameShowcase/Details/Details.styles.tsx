import styled from "styled-components";

export const DetailsSection = styled.section`
    background-color: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    max-width: 300px;
    height: auto;
    margin-bottom: 2rem;
`;

export const TrailerWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    aspect-ratio: 16 / 9;
    margin-bottom: 3rem;
    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
`;

export const SectionBlock = styled.div`
    max-width: 800px;
    text-align: left;
    margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.pixel};
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const SectionContent = styled.p`
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
`;
