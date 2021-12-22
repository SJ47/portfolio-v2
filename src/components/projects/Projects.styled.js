import { styled, Box } from "@mui/system";

export const StyledH2 = styled("h2")`
        font-size: clamp(1rem, 7vw, 4rem);
        line-height: 1.2;
        letter-spacing: .05em;
        text-align: center;
        padding-bottom: .5em;
        margin: 0;
        
        // Desktop view
        ${props => props.theme.breakpoints.up("sm")} {
            margin-bottom: .25em;
            font-size: clamp(2rem, 7.5vw, 3rem);
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
        margin: .5em 0em .5em 0em;
        top: -25px;
        margin-left: .75em;
        font-weight: normal;
        padding: 1em 3em 0 3em;
    }

    // First type of highlighted background
    &:first-of-type {
        background: ${props => props.theme.palette.primary.main};
        padding: 1.2em 0 0.25em 0;
        letter-spacing: .3em;
        position: relative;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 2em;

           // Desktop view
        ${props => props.theme.breakpoints.up("sm")}{
            margin-bottom: 1em;
        }
    }
`;
