import React, { useState, useEffect } from "react";
import {
    Nav,
    NavContainer,
    Brand,
    Hamburger,
    Menu,
    MenuItem,
    Backdrop,
} from "./NavBar.styles";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && open) {
                setOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [open]);

    const handleBackdropClick = () => setOpen(false);

    return (
        <Nav>
            <NavContainer>
                <Brand to="/" onClick={() => setOpen(false)}>
                    Mole Team 6
                </Brand>

                <Hamburger
                    open={open}
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                >
                    <span />
                    <span />
                    <span />
                </Hamburger>

                <Menu open={open}>
                    <MenuItem to="/" onClick={() => setOpen(false)}>
                        Home
                    </MenuItem>
                    <MenuItem to="/about" onClick={() => setOpen(false)}>
                        About
                    </MenuItem>
                    {/* Add other nav links */}
                </Menu>
            </NavContainer>

            {open && <Backdrop onClick={handleBackdropClick} />}
        </Nav>
    );
};

export default NavBar;
