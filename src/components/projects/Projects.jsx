import React from "react";
import { StyledParagraph, StyledH2 } from "./Projects.styled";
import { StyledProjectsContainer } from "../container/Container";
import Carousel from "../carousel/Carousel";

const Projects = ({ theme, projectData }) => {
    return (
        <StyledProjectsContainer
            id="projects"
            sx={{ bgcolor: "slategrey", mt: "4em" }}
        >
            <StyledH2>My Projects</StyledH2>{" "}
            <StyledParagraph>A selection of my latest projects</StyledParagraph>
            <Carousel theme={theme} projectData={projectData} />
        </StyledProjectsContainer>
    );
};

export default Projects;
