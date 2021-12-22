import React from "react";
import { StyledSwitch } from "./Switch.styled";
import { Tooltip } from "@mui/material";

const Switch = ({ handleThemeSwitch }) => {
    return (
        <>
            <Tooltip title="Switch Theme" arrow placement="top">
                <StyledSwitch onChange={handleThemeSwitch} />
            </Tooltip>
        </>
    );
};

export default Switch;
