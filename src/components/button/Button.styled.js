import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
    background: ${props => props.theme.palette.primary.main};

`;

export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, ${props => props.theme.palette.primary.main} 0%, ${props => props.theme.palette.primary.dark} 100%);
    padding: .4em 1.2em;
    margin: 1em;
    border-radius: 25px;
`;