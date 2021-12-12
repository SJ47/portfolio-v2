import { styled, Box } from "@mui/system";

export const StyledH2 = styled("h2")`
    margin: 1em 0em 0em 0em;
    font-size: clamp(1rem, 7vw, 4rem);
    line-height: 1.2;
    letter-spacing: .05em;
    text-align: center;
    padding-bottom: .5em;
    
    // Desktop view
    ${props => props.theme.breakpoints.up("sm")} {
        font-size: clamp(2rem, 7.5vw, 3rem);
        margin-bottom: .5em;
    }
`;

export const StyledParagraph = styled(Box)`
    padding: 1em 2em 0 2em;
    letter-spacing: .04em;
    line-height: 1.8;
    width: 100%;
    
    span {
        border-bottom: 4px solid ${props => props.theme.palette.primary.main};
    }
    
    
    // Desktop view
    ${props => props.theme.breakpoints.up("sm")}{
        top: -25px;
        margin-left: .75em;
        font-weight: normal;
        /* padding: 1em 3em 0 3em; */
    }

    // First type of highlighted background
    &:first-of-type {
        background: ${props => props.theme.palette.primary.main};
        padding: 1.2em 0 .25em 0;
        letter-spacing: .3em;
        position: relative;
        text-align: center;
        margin: 0 auto;
        margin-bottom:1em;
    }
`;

export const StyledAuthor = styled(Box)`
    text-align: center;
    margin: 1em;
    opacity: .25;
`;

export const StyledImage = styled("img")`
    /* height: 100px;
    position: relative;
    left: -110px;
    top: 30px; */
`;