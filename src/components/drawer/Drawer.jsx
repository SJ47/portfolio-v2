import React, { useState } from "react";
import { Divider, Drawer as MuiDrawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import DeveloperModeOutlinedIcon from "@mui/icons-material/DeveloperModeOutlined";

import { NavHashLink as Link } from "react-router-hash-link";

const drawerWidth = 240;

const Drawer = ({ Logo, handleMenuItemChange }) => {
    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
            top: elementPosition,
            left: 0,
            behavior: "smooth",
        });
    };

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    }));

    const myIcons = [
        <DesignServicesOutlinedIcon />,
        <InfoOutlined />,
        <DeveloperModeOutlinedIcon />,
        <ConnectWithoutContactIcon />,
    ];

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                    mr: 2,
                    ml: 1,
                    ...(open && { display: "none" }),
                    visibility: { xs: "visible", sm: "hidden" },
                }}
            >
                <MenuIcon sx={{ fontSize: "3rem" }} />
            </IconButton>

            <MuiDrawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="temporary"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Logo open={open} />
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {["Services", "About", "Projects", "Contact"].map(
                        (text, index) => (
                            <ListItem
                                button
                                key={text}
                                onClick={() => {
                                    handleDrawerClose();
                                    handleMenuItemChange(
                                        `/${text.toLowerCase()}`
                                    );
                                }}
                                value={text}
                                label={text}
                                to={`/#${text.toLowerCase()}`}
                                component={Link}
                                scroll={(el) => scrollWithOffset(el, 78)}
                                spy="true"
                                smooth={true}
                                offset={-55}
                                duration={1000}
                            >
                                <ListItemIcon>{myIcons[index]}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    )}
                </List>
            </MuiDrawer>
        </>
    );
};

export default Drawer;
