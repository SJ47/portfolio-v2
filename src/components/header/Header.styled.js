import { styled } from "@mui/system";
import { Tabs, Tab, Toolbar } from "@mui/material";

export const StyledToolBar = styled(Toolbar)`
    height: 100px;
    min-width: 400px;
    /* width: 100%; */
    justify-content: space-between;
`;

export const StyledTabs = styled(Tabs)`
    /* padding: 1em; */
    width: 100%;
    `;

export const StyledTab = styled(Tab)`
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: bold;

    &:last-child {
        margin-left: auto;
        border: 2px solid red;
        color: red;
        border-radius: 5px;
        background: white;
        
        &:hover {
           background: red;
           color: white;
           opacity: 0.8;
           font-weight: bold;
        }
    }
`
