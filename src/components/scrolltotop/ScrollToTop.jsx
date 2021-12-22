import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";

const ScrollToTop = (props) => {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100, // position where icon will be shown
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor"
        );

        anchor.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1 }}
            >
                {children}
            </Box>
        </Zoom>
    );
};

export default ScrollToTop;
