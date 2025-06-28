import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.danger};
    font-family: ${({ theme }) => theme.fonts.pixel};
    text-shadow: -1px 0 rgba(255, 76, 76, 0.5), 0 1px rgba(255, 76, 76, 0.5),
        1px 0 rgba(255, 76, 76, 0.5), 0 -1px rgba(255, 76, 76, 0.5);
`;

export const Description = styled.p`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.fonts.main};
`;
