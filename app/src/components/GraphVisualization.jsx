import Graph from "react-graph-vis";
import { useState,  useEffect} from "react";

/*
function GraphVisualization(props) {
  //const [myNodes, setNodes] = useState([]);
  //const [myEdges, setEdges] = useState([]);
  let myNodesTemp = []; 
  let myEdgesTemp = [];
  let node_id_counter = 0;
  const x_input_align = 50;
  const x_bit_array_align = 100;
  const y_align = 50;
  const x_query_align = 200;
  const y_query_align = 100;

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
  const myNodes_ = props.myNodes;
  const myEdges_ = props.myEdges;
  let myNodes = myNodes_;
  let myEdges = myEdges_;

  console.log(myNodes_);
  myNodes = myNodes_;

  const graph = {
      nodes: myNodes,
      edges: myEdges
    };
  
  const options = {
    layout: {
      // hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };

  return (
      <Graph 
        graph={graph}
        options={options}
    />

  )

}
export default GraphVisualization;
*/