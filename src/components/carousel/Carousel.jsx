import React, { useState } from "react";
import { StyledCarousel, StyledImage } from "./Carousel.styled";
import {
    Button,
    Box,
    Divider,
    Container,
    Fab,
    Dialog,
    CardHeader,
    Avatar,
    CardMedia,
    Fade,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LaunchIcon from "@mui/icons-material/Launch";
import GithubCorner from "react-github-corner";
import Collapse from "@mui/material/Collapse";
import Tooltip from "@mui/material/Tooltip";
import FlipToBackIcon from "@mui/icons-material/FlipToBack";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";
import ReactCardFlip from "react-card-flip";
import ScreenshotIcon from "@mui/icons-material/Screenshot";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1300 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1300, min: 850 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 850, min: 300 },
        items: 1,
    },
};

// Function component
const Carousel = ({ projectData, theme }) => {
    // const numberOfProjects = projectData.length;

    const [expanded, setExpanded] = useState([]);

    const handleExpandClick = (index) => {
        let newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    // Flipped Card
    const [isFlipped, setIsFlipped] = useState([]);

    const handleFlipCard = (index) => {
        let newIsFlipped = [...isFlipped];
        newIsFlipped[index] = !newIsFlipped[index];
        setIsFlipped(newIsFlipped);
    };

    // Dialog modal
    const [open, setOpen] = useState([]);

    const handleOpen = (index) => {
        let newOpen = [...open];
        newOpen[index] = !newOpen[index];
        setOpen(newOpen);
    };

    const itemList = projectData.map((project) => (
        <Container
            key={project.id}
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <ReactCardFlip
                isFlipped={isFlipped[project.id]}
                flipDirection="horizontal"
            >
                <Card
                    key={project.id}
                    sx={{
                        width: "400px",
                        borderRadius: "15px",
                    }}
                >
                    <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        fontWeight="bold"
                        sx={{ mt: 2, pr: 2, mx: 2 }}
                        textAlign="center"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                    >
                        {project.projectName}
                    </Typography>
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{
                                    bgcolor: "error.main",
                                    fontSize: "small",
                                }}
                                aria-label="game"
                            >
                                {project.category}
                            </Avatar>
                        }
                        action={<IconButton aria-label="settings"></IconButton>}
                        title={project.subtitle}
                        subheader={project.projectTeam}
                    />

                    <Tooltip title="View source code on Github" placement="left">
                        <Box
                            as="span"
                            sx={{
                                position: "relative",
                                top: "-145px",
                                left: "402px",
                            }}
                        >
                            <GithubCorner
                                href={project.gitHubLink}
                                target="_blank"
                                size={65}
                            />
                        </Box>
                    </Tooltip>

                    <CardMedia
                        component="img"
                        height="140"
                        image={project.image}
                        alt="slide game"
                        sx={{ m: 0, p: 0, bgcolor: "red" }}
                    />
                    <CardContent
                        sx={{
                            textAlign: "left",
                        }}
                    >
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{
                                bgcolor: "orange",
                                px: 1.2,
                                py: 0.33,
                                display: "inline",
                                borderRadius: "5px",
                            }}
                        >
                            Tech
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                mt: 2,
                                minHeight: "40px", // Keep tech used height at 2 lines for alignment
                            }}
                        >
                            {project.techDescription}
                        </Typography>
                    </CardContent>
                    <Divider variant="middle" light={true} />
                    <CardActions
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mx: 1,
                        }}
                    >
                        <Tooltip
                            title="See project running live!"
                            arrow
                            placement="top"
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                        >
                            <Button
                                size="small"
                                variant="contained"
                                color="success"
                                href={project.liveAppLink}
                                target="_blank"
                            >
                                Live Demo <LaunchIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip
                            title="Learn more about this project"
                            arrow
                            placement="top"
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                        >
                            <Button
                                size="small"
                                variant="text"
                                // onClick={handleFlipCard} // Front card now moving to back
                                onClick={() => {
                                    handleFlipCard(project.id);
                                }}
                            >
                                Learn More
                                <FlipToBackIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip
                            title={
                                !expanded[project.id]
                                    ? "View project brief"
                                    : "Close brief"
                            }
                            arrow
                            placement="top"
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                        >
                            <Fab
                                size="large"
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    handleExpandClick(project.id);
                                }}
                                sx={{
                                    flexDirection: "column",
                                    borderRadius: "50%",
                                    pt: 1,
                                    pb: 0,
                                    px: 0,
                                    fontWeight: "bold",
                                }}
                            >
                                {!expanded[project.id] && <div>Brief</div>}
                                <ExpandMoreIcon
                                    sx={{
                                        transform: !expanded[project.id]
                                            ? "rotate(0deg)"
                                            : "rotate(180deg)",
                                    }}
                                />
                            </Fab>
                        </Tooltip>
                    </CardActions>

                    {/* Brief extention below */}
                    <Collapse
                        in={expanded[project.id]}
                        timeout="auto"
                        unmountOnExit
                    >
                        <CardContent>
                            <Typography
                                paragraph
                                fontWeight="bold"
                                variant="h6"
                                color="text.secondary"
                                sx={{ textDecoration: "underline" }}
                            >
                                Brief
                            </Typography>
                            <Typography
                                color="text.secondary"
                                dangerouslySetInnerHTML={{
                                    __html: project.brief,
                                }}
                            />
                        </CardContent>
                    </Collapse>
                </Card>
                {/*  */}
                {/* BACK OF CARD  */}
                {/*  */}

                <Card
                    key={project.id}
                    sx={{
                        width: "400px",
                        borderRadius: "15px",
                    }}
                >
                    <Box sx={{ position: "relative" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={project.image}
                            alt="slide game"
                            sx={{
                                m: 0,
                                p: 0,
                            }}
                        />

                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                bgcolor: "rgba(0, 0, 0, 0.54)",
                                color: "white",
                                padding: "10px",
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="h5">
                                {project.projectName}
                            </Typography>
                            <Typography variant="body2">
                                more information
                            </Typography>
                        </Box>
                    </Box>
                    <CardContent
                        sx={{
                            textAlign: "left",
                        }}
                    >
                        <Typography
                            variant="overline"
                            fontSize="1.4rem"
                            display="block"
                            gutterBottom
                            color="text.secondary"
                        >
                            Learning
                        </Typography>
                        <Typography
                            paragraph
                            color="text.secondary"
                            dangerouslySetInnerHTML={{
                                __html: project.learning,
                            }}
                        />

                        <Typography paragraph color="text.secondary">
                            Please feel free to have a look at the live demo or
                            checkout the source code on my github.
                        </Typography>
                        <Typography color="text.secondary">
                            Thank you for taking the time to look.{" "}
                        </Typography>
                    </CardContent>
                    <Divider variant="middle" light={true} />
                    <CardActions
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mx: 1,
                        }}
                    >
                        <Tooltip
                            title="Flip to card front"
                            arrow
                            placement="top"
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    color: "primary.main",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    handleFlipCard(project.id);
                                }}
                            >
                                <Typography variant="button">
                                    Flip Back
                                </Typography>
                                <FlipToFrontIcon />
                            </Box>
                        </Tooltip>

                        <Tooltip
                            title="View a screenshot"
                            arrow
                            placement="top"
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    color: "primary.main",
                                    cursor: "pointer",
                                    m: 1,
                                }}
                                onClick={() => {
                                    handleOpen(project.id);
                                }}
                            >
                                <Typography variant="button">
                                    VIEW SCREENSHOT
                                </Typography>
                                <ScreenshotIcon />
                            </Box>
                        </Tooltip>
                    </CardActions>

                    <Dialog
                        open={open[project.id] ? open[project.id] : false}
                        // onClose={() => handleClose(project.id)}
                        sx={{
                            bgcolor: "transparent",
                            // opacity: 0.5,
                        }}
                    >
                        <DialogTitle>{project.projectTitle}</DialogTitle>
                        <DialogContent>
                            <DialogContentText sx={{ mb: 1 }}>
                                Sample screenshot
                            </DialogContentText>
                            <Box
                                noValidate
                                component="div"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    m: "auto",
                                    maxWidth: "50vw",
                                    maxHeight: "70vh",
                                }}
                            >
                                <StyledImage src={project.image} alt="project" />
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    handleOpen(project.id);
                                }}
                            >
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Card>
            </ReactCardFlip>
        </Container>
    ));

    return (
        <>
            <StyledCarousel
                responsive={responsive}
                showDots={true}
                centerMode={false}
                slidesToSlide={1}
                renderDotsOutside={true}
            >
                {itemList}
            </StyledCarousel>
        </>
    );
};

export default Carousel;
