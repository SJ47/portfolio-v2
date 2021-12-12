import { Button } from "@mui/material";
import { styled } from "@mui/system";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const StyledCarousel = styled(Carousel)`
    /* background: ${props => props.theme.palette.secondary.main}; */
    /* width: 100%; */
    /* background: white; */
`;

export const StyledImage = styled("img")`
    object-fit: contain;
    width: 100%;
    max-height: 80vh;
    
`;

export const StyledButton = styled(Button)`
    background: "orange";
`;