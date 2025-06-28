import React from "react";
import NavBar from "../NavBar/NavBar.component";
import styled from "styled-components";

const PageWrapper = styled.main`
    padding-top: ${({ theme }) => theme.navHeight || "64px"};
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <NavBar />
            <PageWrapper>{children}</PageWrapper>
        </>
    );
};

export default Layout;
