import { TextField, Grid, Button } from "@mui/material";
import Form from "./Form";

import { useState } from "react";
import GraphVisualization from "./GraphVisualization";

function Visualization() {
    const [input, setInput] = useState("");
    // const {BloomFilter} = require('bloom-filters');
    const [formValues, setFormValues] = useState({
        size: 0,
        num_hashes: 0
    });

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
            <Form setParentState={setFormValues}/>
            <GraphVisualization />
        </Grid>
    )
}

export default Visualization;