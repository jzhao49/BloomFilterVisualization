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

    const [myNodes, setNodes] = useState([]);
    const [myEdges, setEdges] = useState([]);
    let myNodesTemp = []; 
    let myEdgesTemp = [];
    let node_id_counter = 0;
    const x_input_align = 50;
    const x_bit_array_align = 100;
    const y_align = 50;
    const x_query_align = 200;
    const y_query_align = 100;

    // TODO: FIX - UseEffect is delayed by one button click when updated in the child component
    useEffect(() => {
        console.log("formValues: ");
        console.log(formValues);
        if (formValues.size !== 0 && formValues.num_hashes !== 0) {
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
            console.log("bitArray: ");
            console.log(bitArray);
            console.log("seedsArray: ");
            console.log(seedsArray);

            //graph bit nodes and query node.
            add_bit_and_query_nodes(formValues.size);
            console.log("myNodes: ");
            console.log(myNodes);
        }
    }, [formValues]);

    function add_bit_and_query_nodes(size) {
        for (let i = 0; i < size; i++) {
            add_node(bitArray[i], x_bit_array_align, i*y_align);
        }
        // add the query node 
        add_node("query", x_query_align, y_query_align);

        setNodes(myNodes.concat(myNodesTemp));
    }

    // function change_query_edges(new_edges){
    //     //TODO: change the edges from the query node.
    // }

    function add_data_node(label_, bit_nodes) {
        //myNodesTemp = [];
        add_node(label_, x_input_align, node_id_counter*y_align);
        // add edges 
        for (let i = 0; i < bit_nodes.length; i++) {
            add_edge(node_id_counter, bit_nodes[i]);
        }
        setNodes(myNodes.concat(myNodesTemp));
        setEdges(myEdges.concat(myEdgesTemp));
        //TODO: update color and bit value to 1.
    }

    function add_node(label_, x_, y_) {
        console.log("add node id:" + node_id_counter);
        const new_node = {id: node_id_counter, 
                    label: label_, 
                    fixed:{x:true, y:true,}, 
                    x:x_, 
                    y:y_}
        node_id_counter = node_id_counter + 1;
        //setNodes([...myNodes, new_node]);
        myNodesTemp.push(new_node);
    }

    function add_edge(id1, id2) {
        const new_edge = {from: id1, to: id2};
        //setEdges([...myEdges, new_edge]);
        myEdgesTemp.push(new_edge);
    }
//

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
        console.log("hashIndices: ");
        console.log(hashIndices);
        console.log("bitArray: ");
        console.log(bitArray);

        add_data_node(input, hashIndices);
        
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
            <GraphVisualization myNodes={myNodes} myEdges={myEdges}/>
        </Grid>
    )
}

export default Visualization;