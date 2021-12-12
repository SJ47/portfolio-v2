import React from "react";
import { StyledParagraph, StyledBox, StyledH2 } from "./WhatIDo.styled";

import { StyledWhatIDoContainer } from "../container/Container";
import servicesImage from "../../assets/images/services-bg.jpg";
import { Box } from "@mui/system";
import { Stack, Divider, Button } from "@mui/material";
import { NavHashLink as Link } from "react-router-hash-link";

const WhatIDo = () => {
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
            <StyledWhatIDoContainer id="services" bgimage={servicesImage}>
                <StyledH2>What I Do</StyledH2>

                <Stack
                    divider={<Divider orientation="vertical" flexItem />}
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 0, sm: 1 }}
                    textAlign={{ xs: "center" }}
                >
                    <Box>
                        {/* <h2 style={{ marginBottom: "0", marginRight: "0em" }}> */}
                        <Button
                            variant="contained"
                            sx={{
                                width: "100%",
                                border: "none",
                                opacity: 0.7,
                                borderRadius: "0px",
                                // color: "palette.background.default",
                            }}
                        >
                            Front-End Development
                        </Button>
                        <StyledBox>&nbsp;</StyledBox>
                        {/* </h2> */}
                        <StyledParagraph>
                            Experience working with HTML, CSS, JavaScript, React
                            and Leaflet.js library. Integrating and hosting on
                            Netlify and Heroku platforms.
                        </StyledParagraph>
                    </Box>
                    <Box>
                        {/* <h2
                            style={{
                                marginBottom: "0",
                                marginRight: "0em",
                            }}
                        > */}
                        <Button
                            variant="contained"
                            sx={{
                                width: "100%",
                                border: "none",
                                opacity: 0.75,
                                borderRadius: "0px",
                                // color: "palette.background.default",
                                // color: "${props => props.theme.palette.grey[900]}",
                            }}
                        >
                            Back-End Development
                        </Button>
                        <StyledBox>&nbsp;</StyledBox>
                        {/* </h2> */}
                        <StyledParagraph>
                            Experience working with Java, Spring, Python, Flask,
                            Node Express, PostgreSQL, MongoDB and API Fetch.
                            Integrating and hosting on Heroku, MongoDB Atlas and
                            Firebase platforms.
                        </StyledParagraph>
                    </Box>

                    <Box>
                        {/* <h2 style={{ marginBottom: "0", marginRight: "0em" }}> */}
                        <Button
                            variant="contained"
                            sx={{
                                width: "100%",
                                border: "none",
                                opacity: 0.75,
                                borderRadius: "0px",
                                // color: "palette.text.primary",
                            }}
                        >
                            IT Management & Support
                        </Button>
                        <StyledBox>&nbsp;</StyledBox>
                        {/* </h2> */}
                        <StyledParagraph>
                            Over 20 years IT Management experience, servicing the
                            IT infrastructure and support needs of regional sites
                            for a large corporate organisation.
                        </StyledParagraph>
                    </Box>
                </Stack>
                <Button
                    component={Link}
                    variant="contained"
                    value="/projects"
                    label="My Projects"
                    to="/#projects"
                    scroll={(el) => scrollWithOffset(el, 78)}
                    spy="true"
                    smooth={true}
                    offset={-55}
                    duration={1000}
                    sx={{
                        mb: 4,
                        mt: 2,
                        bgcolor: "primary.dark",
                        "&:hover": { bgcolor: "primary.main" },
                    }}
                >
                    My Projects
                </Button>
            </StyledWhatIDoContainer>
        </>
    );
};

export default WhatIDo;
