import { styled } from "@mui/system";

export const StyledContactUsContainer = styled("div")`
    /* height: 50vh; */
    min-width: 200px;
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    

    p {
        font-size: 1.2rem;
        margin-bottom: 0em;
    }

    /* h1 {
        color: ${props => props.theme.palette.primary.main};
    } */

    form {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }

    label {
        padding-top: 1.2em;
        font-weight: bold;
        padding-bottom: .4em;

        em {
           font-weight: normal;
           font-size: smaller;
        }

        &:first-of-type {
            padding-top: 0;
        }
    }

    input, textarea {
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        padding: .7em;
        border: 1px solid lightgrey;
        border-radius: 5px;
    }
`;

export const StyledMessageOnSubmit = styled("div")`
    color: ${(props => props.dataValid ? "green" : "red")};
    display: ${(props => props.message === "" ? "none" : "block")};
    text-align: center;
    padding-top: 1em;
`;

export const StyledSubmitButton = styled("input")`
        margin-top: 1.5em;
        /* color: red; */
        border: none;
        /* background: white; */
        border: 2px solid red;
        font-weight: bold;
        /* font-size: 1.2rem; */
        display: ${(props => props.dataValid ? "none" : "block")};
        margin-bottom: 2em;

        &:hover {
            background: ${(props => props.theme.palette.primary.dark)};
            color: white;
            cursor: pointer;
        }
`;