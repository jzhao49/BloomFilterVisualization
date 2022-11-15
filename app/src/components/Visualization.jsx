import { TextField, Grid, Button } from "@mui/material";
import Form from "./Form";
import { useState, useEffect } from "react";
import GraphVisualization from "./GraphVisualization";
import doHash from "../mumurhash";

function Visualization() {
    const [input, setInput] = useState("");
    const [formValues, setFormValues] = useState({
        size: 0,
        num_hashes: 0
    });
    const [bitArray, setBitArray] = useState([]);
    const [seedsArray, setSeedsArray] = useState([]);
    const [hashIndices, setHashIndices] = useState([]);

    // TODO: FIX - UseEffect is delayed by one button click when updated in the child component
    useEffect(() => {
        if (formValues.size !== 0 || formValues.num_hashes !== 0) {
            let new_bit_arr = [];
            for (let i = 0; i < formValues.size; i++) {
                new_bit_arr.push(0);
            }
            let seeds_arr = [];
            for (let i = 0; i < formValues.num_hashes; i++) {
                seeds_arr.push(Math.floor(Math.random() * (100 * i)))
            }
            setSeedsArray(seeds_arr);
            setBitArray(new_bit_arr);
            console.log(bitArray)
            console.log(seedsArray)
        }
    }, [formValues]);

    const handleOnChange = (event) => {
        setInput(event.target.value);
    }
    
    const handleonClick = () => {
        let hash_idxs = [];
        for (let i = 0; i < seedsArray.length; i++) {
            hash_idxs.push((doHash(input, seedsArray[i])) % formValues.size);
        }
        setHashIndices(hash_idxs);
        for (let i = 0; i < hash_idxs.length; i++) {
            bitArray[hash_idxs[i]] = 1;
        }
        console.log(hashIndices);
        console.log(bitArray);
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