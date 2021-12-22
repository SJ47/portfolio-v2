import React, { useState } from "react";
import introImage from "../assets/images/sj-photo.png";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import WhoIAm from "../components/whoiam/WhoIAm";
import WhatIDo from "../components/whatido/WhatIDo";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrolltotop/ScrollToTop";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Success from "../components/success/Success";
import StyledContainer from "../components/container/Container";

import projectData from "../assets/data/data.json";

const AppContainer = ({ handleThemeSwitch, theme }) => {
    // Handle active menu selected
    const [menuItem, setMenuItem] = useState("/services");
    const [messageSent, setMessageSent] = useState(false);

    const handleMenuItemChange = (newValue) => {
        setMenuItem(newValue);
    };

    const handleMessageSentStatus = () => {
        setMessageSent(false);
    };

    return (
        <>
            <Header
                theme={theme}
                handleThemeSwitch={handleThemeSwitch}
                handleMenuItemChange={handleMenuItemChange}
                menuItem={menuItem}
            />
            <StyledContainer>
                <Intro theme={theme} introImage={introImage} />
                <WhatIDo />
                <WhoIAm />
                <Projects theme={theme} projectData={projectData} />
                <Footer
                    introImage={introImage}
                    handleMessageSentStatus={handleMessageSentStatus}
                />
                {messageSent && <Success />}

                <ScrollToTop>
                    <Fab
                        color="secondary"
                        size="small"
                        aria-label="scroll back to top"
                    >
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollToTop>
            </StyledContainer>
        </>
    );
};

export default AppContainer;
