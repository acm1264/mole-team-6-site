import styled from "styled-components";

export const Container = styled.div`
    padding: ${({ theme }) => theme.spacing.lg};
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textPrimary};
    min-height: 100vh;
`;

export const Header = styled.h1`
    font-size: 2.75rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-family: ${({ theme }) => theme.fonts.pixel};
    color: ${({ theme }) => theme.colors.accent1};
    text-shadow: -1px 0 ${({ theme }) => theme.colors.accent4},
        0 1px ${({ theme }) => theme.colors.accent4},
        1px 0 ${({ theme }) => theme.colors.accent4},
        0 -1px ${({ theme }) => theme.colors.accent4};
`;

export const Paragraph = styled.p`
    font-size: 1.25rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-family: ${({ theme }) => theme.fonts.main};
`;
