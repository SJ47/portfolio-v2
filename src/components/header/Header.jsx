import React from "react";

import { StyledTabs, StyledTab, StyledToolBar } from "./Header.styled";
import { AppBar, useMediaQuery } from "@mui/material";
import Drawer from "../drawer/Drawer";
import Logo from "../logo/Logo";
import Switch from "../switch/Switch";

import { NavHashLink as Link } from "react-router-hash-link";

const Header = ({ theme, handleThemeSwitch, handleMenuItemChange, menuItem }) => {
    const showText = useMediaQuery(theme.breakpoints.down("sm"));

    // Mui Tabs takes in event and newValue.
    // Pass newValue back to container holding all the state and logic.
    const handleChange = (event, newValue) => {
        handleMenuItemChange(newValue);
    };

    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
            top: elementPosition,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <AppBar position="sticky" id="back-to-top-anchor">
                <StyledToolBar
                    disableGutters={true}
                    sx={{ background: "inherit" }}
                >
                    {!showText && <Logo />}
                    {showText ? (
                        <Drawer
                            Logo={Logo}
                            handleMenuItemChange={handleMenuItemChange}
                        />
                    ) : (
                        <StyledTabs
                            value={menuItem}
                            onChange={handleChange}
                            textColor="inherit"
                            indicatorColor="primary"
                            variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile
                            sx={{
                                "& .MuiTabs-indicator": {
                                    backgroundColor: "error.main",
                                    height: "5px",
                                    // top: "45px",
                                },
                            }}
                        >
                            <StyledTab
                                label="My Services"
                                value="/services"
                                to="/#services"
                                component={Link}
                                scroll={(el) => scrollWithOffset(el, 78)}
                                spy="true"
                                smooth={true}
                                offset={-55}
                                duration={1000}
                            />
                            <StyledTab
                                value="/about"
                                label="About Me"
                                to="/#about"
                                component={Link}
                                scroll={(el) => scrollWithOffset(el, 78)}
                                spy="true"
                                smooth={true}
                                offset={-55}
                                duration={1000}
                            />
                            <StyledTab
                                value="/projects"
                                label="My Projects"
                                to="/#projects"
                                component={Link}
                                scroll={(el) => scrollWithOffset(el, 78)}
                                spy="true"
                                smooth={true}
                                offset={-55}
                                duration={1000}
                            />
                            <StyledTab
                                sx={{ mr: 8 }}
                                value="/contact"
                                label="Contact"
                                to="/#contact"
                                component={Link}
                                scroll={(el) => scrollWithOffset(el, 78)}
                                spy="true"
                                smooth={true}
                                offset={-55}
                                duration={1000}
                            />
                        </StyledTabs>
                    )}
                    {showText && <Logo />}
                    <Switch handleThemeSwitch={handleThemeSwitch} />
                </StyledToolBar>
            </AppBar>
        </>
    );
};

export default Header;
