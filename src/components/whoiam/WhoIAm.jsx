import React from "react";
import {
    StyledImage,
    StyledParagraph,
    StyledH2,
    StyledParagraphHeader,
} from "./WhoIAm.styled";
import whoIamImage from "../../assets/images/scott-whangie.jpg";
import StyledWhoIAmContainer from "../container/Container";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";

const WhoIAm = () => {
    return (
        <>
            <StyledWhoIAmContainer id="about">
                <StyledH2>Who I Am</StyledH2>
                <StyledParagraphHeader className="section__subtitle section__subtitle--about">
                    Software developer based in Scotland
                </StyledParagraphHeader>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 0, sm: 1 }}
                    display="flex"
                    alignItems="center"
                >
                    <Box sx={{ width: "90%" }}>
                        <Box display={{ xs: "flex", sm: "block" }}>
                            <StyledImage
                                sx={{
                                    boxShadow: 12,
                                }}
                                src={whoIamImage}
                                alt="Scott Johnston smiling"
                            />
                        </Box>
                        <StyledParagraph>
                            As a recent{" "}
                            <a
                                href="https://codeclan.com/courses/professional-software-development/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <em>CodeClan</em>
                            </a>{" "}
                            <mark>
                                graduate in Professional Software Development,
                            </mark>{" "}
                            &nbsp;with a strong attention to detail, I am looking
                            to further my hands on approach to problem solving and
                            returning to my first and continued IT related passion
                            in a software development role with a keen eye on
                            Front-end Development.
                        </StyledParagraph>
                        <StyledParagraph>
                            I am{" "}
                            <mark>
                                well-versed in IT with a proven track record
                            </mark>{" "}
                            throughout my career with roles in System Programming,
                            Windows Desktop and Server support and more recently
                            as an IT Manager supporting sites throughout Europe.
                        </StyledParagraph>
                        <StyledParagraph>
                            I love <mark>learning new technologies</mark> and to
                            be constantly challenged to solve problems and come up
                            with innovative solutions using my IT knowledge,
                            experience and learning.
                        </StyledParagraph>
                    </Box>
                </Stack>
            </StyledWhoIAmContainer>
        </>
    );
};

export default WhoIAm;
