import styled from "styled-components";

export const HeroContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    padding-bottom: 2rem;
`;

export const HeroImage = styled.img`
    width: 100%;
    max-height: 400px;
    object-fit: cover;
`;

export const Tagline = styled.p`
    margin: 1.5rem 0 0.5rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-align: center;
    max-width: 800px;
`;

export const CTAButton = styled.a`
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.accent1};
    color: ${({ theme }) => theme.colors.surface};
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.accent2};
    }
`;

export const InfoList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.fonts.pixel};
    font-size: 0.9rem;
`;

export const InfoItem = styled.li`
    list-style: none;
`;
