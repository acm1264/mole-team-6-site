import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to bottom right, #1c1c1c, #2c2c2c);
    color: ${({ theme }) => theme.colors.textPrimary};
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    margin: ${({ theme }) => theme.spacing.md} 0;
    font-family: ${({ theme }) => theme.fonts.pixel};
    color: ${({ theme }) => theme.colors.accent1};
    text-shadow: -1px 0 ${({ theme }) => theme.colors.accent4},
        0 1px ${({ theme }) => theme.colors.accent4},
        1px 0 ${({ theme }) => theme.colors.accent4},
        0 -1px ${({ theme }) => theme.colors.accent4};
`;

export const Subtitle = styled.h2`
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.fonts.main};
`;

export const HeroImage = styled.img`
    width: 200px;
    height: auto;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    filter: drop-shadow(0 0 4px ${({ theme }) => theme.colors.accent1});
`;
