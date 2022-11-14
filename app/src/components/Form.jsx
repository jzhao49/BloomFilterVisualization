import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

const defaultValues = {
    size: 0,
    num_hashes: 0 
};

const Form = (props) => {
    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };

    const handleSubmit = (event) => {
        if (formValues.size === 0 || formValues.size === 0) {
            alert("Neither parameter can be null!")
            return
        }
        event.preventDefault();
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
          <Grid container alignItems="center" justify="center" direction="column">
            <Grid item>
              <TextField
                id="size-input"
                name="size"
                label="Size of Bloom Filter"
                type="number"
                value={formValues.size}
                onChange={handleInputChange}
              />
            </Grid>
            <br/>
            <Grid item>
              <TextField
                id="num-hashes-input"
                name="num_hashes"
                label="Number of Hash Functions"
                type="number"
                value={formValues.num_hashes}
                onChange={handleInputChange}
              />
            </Grid>
            <Button variant="contained" color="primary" type="submit">
              Set Parameters
            </Button>
          </Grid>
        </form>
      );
}

export default Form;