import Graph from "react-graph-vis";
import { useState } from "react";

function GraphVisualization() {
    const [myNodes, setNodes] = useState([]);
    const [myEdges, setEdges] = useState([]);
    const [node_id_counter, setNodeCounter] = useState(0);

    const x_input_align = 50;
    const x_bit_array_align = 100;
    const x_query_align = 200;

    function add_node(label_, x_, y_) {
        const new_node = {id: node_id_counter, 
                    label: label_, 
                    fixed:{x:true, y:true,}, 
                    x:x_, 
                    y:y_}
        setNodeCounter(node_id_counter + 1);
        setNodes([...myNodes, new_node]);
    }

    function add_edge(id1, id2) {
        const new_edge = {from: id1, to: id2};
        setEdges([...myEdges, new_edge]);
    }

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