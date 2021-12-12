import { useMediaQuery } from "@mui/material";
import React from "react";
// import introImage from "../../assets/images/sj-photo.png";
import { StyledImage, StyledParagraph, StyledH1 } from "./Intro.styled";

import { StyledIntroContainer } from "../container/Container";

const Intro = ({ theme, introImage }) => {
    const showText = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <StyledIntroContainer>
                <StyledImage
                    sx={{ boxShadow: 12, border: "5px solid lightgrey" }}
                    src={introImage}
                    alt="Scott Johnston smiling"
                />
                <StyledH1>
                    Hi, I am
                    <br /> <strong>Scott Johnston</strong>
                    {!showText && (
                        <StyledParagraph sx={{ boxShadow: 12 }}>
                            software developer
                        </StyledParagraph>
                    )}
                </StyledH1>
            </StyledIntroContainer>
            {showText && <StyledParagraph>software developer</StyledParagraph>}
        </>
    );
};

export default Intro;
