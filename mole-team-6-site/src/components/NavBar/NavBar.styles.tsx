import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.surface};
    z-index: 1000;
    box-shadow: 0 0 0 1.5px ${({ theme }) => theme.colors.accent4},
        0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.md}
        ${({ theme }) => theme.spacing.lg};
`;

export const Brand = styled(Link)`
    font-family: ${({ theme }) => theme.fonts.pixel};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.accent1};
    user-select: none;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.accent2};
    }
`;

export const Hamburger = styled.button<{ open: boolean }>`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 28px;
    height: 28px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.accent4};
    border-radius: 0;
    cursor: pointer;
    z-index: 1002;

    span {
        width: 100%;
        height: 3px;
        background: ${({ theme }) => theme.colors.accent1};
        border-radius: 0;
        transition: all 0.3s linear;
        transform-origin: 1px;
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.accent4};
    }

    ${({ open }) =>
        open &&
        `
    span:nth-child(1) {
      transform: rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg);
    }
  `}

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const Menu = styled.div<{ open: boolean }>`
    display: flex;
    gap: ${({ theme }) => theme.spacing.md};
    align-items: center;

    @media (min-width: 769px) {
        position: static;
        height: auto;
        width: auto;
        padding: 0;
        background: transparent;
        box-shadow: none;
        transform: none !important;
        flex-direction: row;
        transition: none;
        z-index: auto;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        position: fixed;
        top: ${({ theme }) => theme.navHeight};
        right: 0;
        height: calc(100vh - ${({ theme }) => theme.navHeight});
        width: 220px;
        padding: ${({ theme }) => theme.spacing.lg}
            ${({ theme }) => theme.spacing.md};
        background-color: ${({ theme }) => theme.colors.surface};
        box-shadow: ${({ open }) =>
            open ? "-3px 0 12px 2px rgba(58, 166, 85, 0.4)" : "none"};
        transform: ${({ open }) =>
            open ? "translateX(0)" : "translateX(100%)"};
        transition: transform 0.3s ease-in-out;
        z-index: 1001;
    }
`;

export const MenuItem = styled(Link)`
    color: ${({ theme }) => theme.colors.accent1};
    text-decoration: none;
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.fonts.pixel};

    &:hover {
        color: ${({ theme }) => theme.colors.accent2};
    }
`;

export const Backdrop = styled.div`
    @media (max-width: 768px) {
        position: fixed;
        top: ${({ theme }) => theme.navHeight};
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.55);
        z-index: 1000;
    }
`;
