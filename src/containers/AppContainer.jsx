import React, { useState, useEffect } from "react";
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

const AppContainer = () => {
    // Handle active menu selected
    const [menuItem, setMenuItem] = useState("/services");
    const [messageSent, setMessageSent] = useState(false);

    const handleMenuItemChange = (newValue) => {
        setMenuItem(newValue);
    };

    const handleMessageSentStatus = () => {
        setMessageSent(false);
    };
    // https://rock-paper-scissors.onrender.com
    // Waken up project pages stored in Heroku free subscription as they sleep after 30 mins
    useEffect(() => {
        projectData.map((project) => {
            if (project.liveAppLink.includes("herokuapp.com")) {
                // console.log("Fetching: ", project.liveAppLink);
                const projectWebPage = project.liveAppLink;
                fetch(projectWebPage, {
                    mode: "no-cors",
                });
            } else if (project.liveAppLink.includes("foodee")) {
                // console.log("Fetching: foodee-client.herokuapp.com");
                fetch("https://foodee-client.herokuapp.com", {
                    mode: "no-cors",
                });
                // console.log("Fetching: foodee-service.herokuapp.com");
                fetch("https://foodee-service.herokuapp.com/payments", {
                    mode: "no-cors",
                });
            } else if (project.liveAppLink.includes("onrender.com")) {
                fetch("https://rock-paper-scissors.onrender.com", {
                    mode: "no-cors",
                });
            }
        });
    }, []);

    return (
        <>
            <Header
                handleMenuItemChange={handleMenuItemChange}
                menuItem={menuItem}
            />
            <StyledContainer>
                <Intro introImage={introImage} />
                <WhatIDo />
                <WhoIAm />
                <Projects projectData={projectData} />
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
