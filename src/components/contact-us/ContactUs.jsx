import React, { useState } from "react";
import { StyledH2 } from "../footer/Footer.styled";
import {
    StyledContactUsContainer,
    StyledMessageOnSubmit,
    StyledSubmitButton,
} from "./ContactUs.styled";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";

const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
};

const ContactUs = ({ handleMessageSentStatus }) => {
    const [message, setMessage] = useState("");
    // const [dataValid, setDataValid] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setMessage("");
        // setDataValid(false);

        try {
            let response = await fetch("/", {
                // headers: {
                //     "Content-Type": "application/json",
                // },
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                method: "POST",
                // body: JSON.stringify(formData),
                body: encode({
                    "form-name": "contact-form",
                    ...formData,
                }),
            });
            const data = await response.json();

            if (response.statusText !== "OK") {
                setMessage(
                    `Failed to send message. ${data.errors[0].msg} in ${data.errors[0].param}.  Please try again.`
                );
                // setDataValid(false);
            } else {
                setMessage("Thank you, your message was successfully sent");
                // setDataValid(true);
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            }
        } catch (error) {
            // setDataValid(false);
            alert(error);
        }
    };

    return (
        <div>
            <StyledContactUsContainer>
                <StyledH2
                    sx={{
                        color: "primary.main",
                        textAlign: "left",
                        pb: 0,
                        mb: 0,
                        mt: { xs: 1, md: 6 },
                    }}
                >
                    Contact
                </StyledH2>
                {/* <p>I am looking forward to your message</p> */}
                {/* <Box> */}
                <form
                    name="contact-form"
                    // method="post"
                    onSubmit={handleFormSubmit}
                    style={{ margin: "1em 1em 0 0" }}
                >
                    <input type="hidden" name="form-name" value="contact-form" />{" "}
                    {/* above input required for Netlify forms and linked to index.html dummy form*/}
                    <label htmlFor="name">
                        NAME <em>(required)</em>
                    </label>
                    <input
                        name="name"
                        value={formData.name}
                        type="text"
                        placeholder="Your name"
                        onChange={handleInputChange}
                        required
                        minLength="2"
                        maxLength="40"
                    />
                    <label htmlFor="email">
                        EMAIL <em>(required)</em>
                    </label>
                    <input
                        name="email"
                        value={formData.email}
                        type="email"
                        placeholder="Your email"
                        onChange={handleInputChange}
                        required
                        minLength="3"
                        maxLength="254"
                    />
                    <label htmlFor="message">
                        MESSAGE <em>(required)</em>
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        rows="2"
                        cols="50"
                        placeholder="Your message"
                        onChange={handleInputChange}
                        required
                        maxLength="1000" // minLength not supported in textArea
                    ></textarea>
                    {/* <Box sx={{ display: "flex", flexDirection: "row" }}> */}
                    <StyledSubmitButton
                        type="submit"
                        // dataValid={dataValid}
                        value="SEND"
                        sx={{
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                        }}
                    />
                    {/* <SendIcon /> */}
                </form>
                {/* </Box> */}

                <StyledMessageOnSubmit message={message}>
                    {message}
                </StyledMessageOnSubmit>
            </StyledContactUsContainer>
        </div>
    );
};

export default ContactUs;
