import { Box, styled } from "@mui/system";

export const StyledLogoContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    border-radius: 50%;
    border: 5px solid lightgrey;
    padding: 0em .5em 0em .5em;
    margin: 1em;
    background: ${props => props.theme.palette.primary.dark};
    font-weight: bold;
    font-size: 2rem;
    padding: 1em;
    color: ${props => props.theme.palette.primary.light};

    p {
        margin: 0;
        padding: 0;
        position:absolute;
        top: ${({ open }) => open ? "32px" : "0"};
        z-index: 1;
        font-size: 3.5rem;

    }

    span:first-of-type {
        font-size: 1rem;
        position: relative;
        top: ${({ open }) => open ? "22px" : "22px"};
        z-index: 1;

    }

    span:last-of-type {
        position:absolute;
        top: ${({ open }) => open ? "38px" : "6px"};
        font-size: 3.5rem;
        opacity: 0.2;
    }
`;
