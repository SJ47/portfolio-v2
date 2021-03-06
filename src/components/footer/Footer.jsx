import React from "react";
import { StyledParagraph, StyledAuthor, StyledH2 } from "./Footer.styled";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import Tooltip from "@mui/material/Tooltip";
import { StyledFooterContainer } from "../container/Container";
import ContactUs from "../contact-us/ContactUs";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { StyledImage } from "./Footer.styled";
const Footer = ({ introImage, handleMessageSentStatus }) => {
    return (
        <>
            <StyledFooterContainer
                id="contact"
                sx={{
                    m: { md: 2, xs: 0 },
                    p: 0,
                }}
            >
                <Box
                    sx={{
                        boxShadow: 12,
                        display: "flex",
                        flexDirection: { md: "row", xs: "column" },
                        justifyContent: "space-between",
                        my: 4,
                        p: 0,
                        maxWidth: "100%",
                    }}
                >
                    <Box
                        sx={{
                            color: "primary.contrastText",
                            bgcolor: "primary.main",
                            textAlign: "center",
                            p: 0,
                            width: "100%",
                        }}
                    >
                        <StyledH2>Get In Touch</StyledH2>

                        <StyledParagraph sx={{ borderRadius: "5px" }}>
                            <Typography
                                sx={{
                                    fontSize: "1.2rem",
                                    color: "primary.contrastText",
                                }}
                            >
                                I look forward to hearing from you
                            </Typography>
                        </StyledParagraph>

                        <List
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Tooltip title="LinkedIn" arrow>
                                <ListItemButton
                                    component="a"
                                    href="https://www.linkedin.com/in/scott-johnston-it"
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{ p: 2, borderRadius: "50%" }}
                                >
                                    <LinkedInIcon
                                        sx={{
                                            fontSize: "2.5rem",
                                        }}
                                    />
                                </ListItemButton>
                            </Tooltip>

                            <Tooltip title="GitHub" arrow>
                                <ListItemButton
                                    component="a"
                                    href="https://github.com/sj47"
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{ p: 2, borderRadius: "50%" }}
                                >
                                    <GitHubIcon
                                        sx={{
                                            fontSize: "2.5rem",
                                        }}
                                    />
                                </ListItemButton>
                            </Tooltip>

                            <Tooltip title="Twitter" arrow>
                                <ListItemButton
                                    component="a"
                                    href="https://twitter.com/scottJ_Dev"
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{ p: 2, borderRadius: "50%" }}
                                >
                                    <TwitterIcon
                                        sx={{
                                            fontSize: "2.5rem",
                                        }}
                                    />
                                </ListItemButton>
                            </Tooltip>

                            <Tooltip title="Codepen" arrow>
                                <ListItemButton
                                    component="a"
                                    href="https://codepen.io/scottjohnston"
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{ p: 2, borderRadius: "50%" }}
                                >
                                    <CodeIcon
                                        sx={{
                                            fontSize: "2.5rem",
                                        }}
                                    />
                                </ListItemButton>
                            </Tooltip>

                            <Tooltip title="Email" arrow>
                                <ListItemButton
                                    component="a"
                                    href="mailto:hello@scottjohnston.dev"
                                    sx={{ p: 2, borderRadius: "50%" }}
                                >
                                    <EmailIcon
                                        sx={{
                                            fontSize: "2.5rem",
                                        }}
                                    />
                                </ListItemButton>
                            </Tooltip>
                        </List>

                        <StyledImage
                            src={introImage}
                            alt="scott"
                            sx={{
                                boxShadow: 12,
                                border: "5px solid",
                                borderColor: "primary.main",
                                borderRadius: "50%",
                                position: "relative",
                                left: 0,
                                top: { md: "50px", xs: "-10px" },
                                height: { md: "100px", xs: "75px" },
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            mx: { md: 8, xs: 1 },
                            my: 0,
                            width: "100%",
                            minWidth: "10px",
                        }}
                    >
                        <ContactUs
                            handleMessageSentStatus={handleMessageSentStatus}
                        />
                    </Box>
                </Box>
            </StyledFooterContainer>
            <StyledAuthor>
                <em className="footer-by-text">Scott Johnston &copy;2021</em>
            </StyledAuthor>
        </>
    );
};

export default Footer;
