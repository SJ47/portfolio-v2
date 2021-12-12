import React from "react";
import { StyledSwitch } from "./Switch.styled";
// import { useMediaQuery } from "@mui/material";
import { Tooltip } from "@mui/material";

const Switch = ({ handleThemeSwitch }) => {
    // const switchTopPosition = useMediaQuery("(min-width:300px)") ? "25px" : "0";

    return (
        <>
            <Tooltip title="Switch Theme" arrow placement="top">
                <StyledSwitch
                    onChange={handleThemeSwitch}
                    // sx={{ top: switchTopPosition }}
                />
            </Tooltip>
        </>
    );
};

export default Switch;
