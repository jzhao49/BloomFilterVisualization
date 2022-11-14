import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import Form from "./Form";

import { useState } from "react";

function Visualization() {
    const [input, setInput] = useState("");

    const handleOnChange = (event) => {
        setInput(event.target.value);
    }
    
    const handleonClick = () => {
        console.log(input);
    }

    return (
        <Grid container spacing={3} padding={4} direction="row" alignContent="center">
            <TextField
                    label="input"
                    margin="normal"	
                    value={input}
                    onChange={handleOnChange}
            />
            <Button variant="text" onClick={handleonClick}> Add! </Button>
            <Form />
        </Grid>
    )
}

export default Visualization;