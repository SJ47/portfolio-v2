import { Box, styled } from "@mui/system";

export const StyledH1 = styled("h1")`
        margin-top: 0em;
        font-size: clamp(1rem, 7vw, 4rem);
        line-height: 1.2;
        letter-spacing: .05em;
        text-align: left;

        // Desktop view
        ${props => props.theme.breakpoints.up("sm")} {
            font-size: clamp(2rem, 6.5vw, 4rem);
            margin-bottom: 0;
        }
`;

export const StyledImage = styled("img")`
    border-radius: 50%;
    max-height: 150px;
    margin: 0em 1em 1em 1em;

    // Desktop view
    ${props => props.theme.breakpoints.up("sm")} {
        max-height: 200px;
        border-radius: 10%;
        margin: 0em 2em 0em 0em;
    }
`;

export const StyledParagraph = styled(Box)`
    background: ${props => props.theme.palette.primary.main};
    padding: 1.2em 0 0.25em 0;
    font-size: 1.2rem;
    letter-spacing: .3em;
    position: relative;
    top: -40px;
    z-index: -1;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    
    // Desktop view
    ${props => props.theme.breakpoints.up("sm")}{
        top: -25px;
        margin-left: .75em;
        font-weight: normal;
    }
`;
