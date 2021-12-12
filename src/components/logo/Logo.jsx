import React from "react";
import { StyledLogoContainer } from "./Logo.styled";

const Logo = ({ open }) => {
    return (
        <>
            <StyledLogoContainer open={open}>
                <p>SJ</p>
                <span>dev</span>
                <span>&lt;/&gt;</span>
            </StyledLogoContainer>
        </>
    );
};

export default Logo;
