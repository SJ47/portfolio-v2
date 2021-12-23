import React, { useContext } from "react";
import { StyledSwitch } from "./Switch.styled";
import { Tooltip } from "@mui/material";
import { HandleThemeSwitchContext } from "../../App";

const Switch = () => {
    const handleThemeSwitch = useContext(HandleThemeSwitchContext);

    return (
        <>
            <Tooltip title="Switch Theme" arrow placement="top">
                <StyledSwitch onChange={handleThemeSwitch} />
            </Tooltip>
        </>
    );
};

export default Switch;
