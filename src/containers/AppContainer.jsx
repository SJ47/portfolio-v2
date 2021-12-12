import React, { useState } from "react";
import { Switch as RouterSwitch, Route } from "react-router-dom"; // Routes replaces Switch in ver.6
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
                <RouterSwitch>
                    <Route exact path="/">
                        <Intro theme={theme} introImage={introImage} />
                        <WhatIDo />
                        <WhoIAm />
                        <Projects theme={theme} projectData={projectData} />
                    </Route>
                </RouterSwitch>
                <Footer introImage={introImage} />
                {/* {!messageSent} ? <Footer introImage={introImage} /> :{" "}
                <Success handleMessageSentStatus={handleMessageSentStatus} /> */}
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
