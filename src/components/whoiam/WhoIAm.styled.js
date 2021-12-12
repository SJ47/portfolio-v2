import { Box, styled } from "@mui/system";

export const StyledH2 = styled("h2")`
        margin: 0;
        font-size: clamp(1rem, 7vw, 4rem);
        line-height: 1.2;
        letter-spacing: .05em;
        text-align: center;
        padding-bottom: .5em;

        // Desktop view
        ${props => props.theme.breakpoints.up("sm")} {
            margin: .25em 0em .5em 0em;
            font-size: clamp(2rem, 7.5vw, 3rem);
        }
`;

export const StyledImage = styled("img")`
    height: 200px;
    width: 200px;
    border-radius: 20%;
    float: none;
    margin: 2em auto 0 auto;

    // Desktop view
    ${props => props.theme.breakpoints.up("sm")} {
        height: 250px;
        width: 250px;
        float: right;
        margin: 0em 0em 0em 1em;
    }
`;

export const StyledParagraph = styled(Box)`
    padding: 2em 2em 0 2em;
    letter-spacing: .1em;
    line-height: 1.5;
    /* margin-bottom: 0em; */

    span {
        border-bottom: 4px solid ${props => props.theme.palette.primary.main};
    }
    
    mark {
        background: ${props => props.theme.palette.primary.dark};
        color: ${props => props.theme.palette.primary.light};
    }
    
    // Desktop view
    ${props => props.theme.breakpoints.up("sm")}{
        top: -25px;
        /* margin-left: .75em; */
        /* font-weight: normal; */
        padding: 1em 3em 0 3em;
    }

    a:link {
        text-decoration: none;
        color: ${props => props.theme.palette.primary.light};
    }

    a:visited {
        text-decoration: none;
        color: ${props => props.theme.palette.primary.light};
    }

    a:hover {
        color: ${props => props.theme.palette.secondary.light};
        background: ${props => props.theme.palette.secondary.dark};
    }

    a:active {
        color: ${props => props.theme.palette.secondary.light};
        background: ${props => props.theme.palette.secondary.dark};
    }
`;

export const StyledParagraphHeader = styled(StyledParagraph)`
        background: ${props => props.theme.palette.primary.main};
        padding: 1.2em 0 0.25em 0;
        letter-spacing: .3em;
        position: relative;
        text-align: center;
        margin: 0 auto;
`;
