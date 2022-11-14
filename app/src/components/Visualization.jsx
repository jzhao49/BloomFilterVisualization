import { TextField } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';

import { useState } from "react";

function Visualization() {
    const [value, setValue] = useState("");

    const handleOnChange = (event) => {
        setValue(event.target.value);
    }
    
    const handleonClick = () => {
        console.log(value);
    }

    return (
        <Grid container spacing={3} padding={4} direction="row" alignContent="center">
            <TextField
                    label="input"
                    margin="normal"	
                    value={value}
                    onChange={handleOnChange}
            />
            <Button variant="text" onClick={handleonClick}> Add! </Button>
        </Grid>


    )
}

export default Visualization;