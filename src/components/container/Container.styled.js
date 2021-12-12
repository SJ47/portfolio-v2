import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledContainer = styled(Box)`
    padding: 2em 0 0 0;
    max-width: 1440px;
    min-width: 400px;
    margin: 0 auto;
    /* background: orange; */
`;

export const StyledIntroContainer = styled(StyledContainer)`
    display: flex;
    align-items: center;
    padding-top: 0em;
    
    // Desktop view
    ${props => props.theme.breakpoints.up("sm")} {
        padding-top: 1em;
        margin-left: 2em;
    }
`;

export const StyledWhatIDoContainer = styled(StyledContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${props => props.bgimage});
    background-size: cover;
    margin-top: 0em;
    /* margin-top: ${props => props.theme.breakpoints.up("xs") ? "0em" : "4em"}; */
    
    // Desktop view
    ${props => props.theme.breakpoints.up("sm")} {
        /* flex-direction: column; */
        margin-top: 2em;
    }
`;

export const StyledWhoIAmContainer = styled(StyledContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;


    // Desktop view
    ${props => props.theme.breakpoints.up("sm")} {
     margin: 0;
    padding: 0;
    }
`;

export const StyledProjectsContainer = styled(StyledContainer)`
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    padding-bottom: 2em;
        // Desktop view
    ${props => props.theme.breakpoints.up("sm")} {
    }
`;

export const StyledFooterContainer = styled(StyledContainer)`
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: space-around;


        // Desktop view
    ${props => props.theme.breakpoints.up("sm")} {
    }
`;