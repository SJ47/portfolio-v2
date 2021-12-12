import { Box, styled } from "@mui/system";

export const StyledH2 = styled("h2")`
    margin: 0em 0em .5em 0em;
    font-size: clamp(1rem, 7vw, 4rem);
    line-height: 1.2;
    letter-spacing: .05em;
    color: ${props => props.theme.palette.grey[100]};

    /* color: ${props => props.theme.palette.text.primary}; */
    

    // Desktop view
    ${props => props.theme.breakpoints.up("sm")} {
        margin-top: .5em;
        font-size: clamp(2rem, 7.5vw, 3rem);
    }
`;

export const StyledParagraph = styled(Box)`
    padding: 0em 2em 0em 2em;
    letter-spacing: .04em;
    line-height: 1.5;
    margin-bottom: 1em;
    color: ${props => props.theme.palette.grey[100]};
    


    // Desktop view
    ${props => props.theme.breakpoints.up("sm")}{
        top: -25px;
        font-weight: normal;
    }
`;

export const StyledBox = styled(Box)`
    /* background: ${props => props.theme.palette.primary.main}; */
    position: relative;
    top: -35px;
    z-index: 1;
    opacity: .4;
`;