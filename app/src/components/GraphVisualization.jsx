import Graph from "react-graph-vis";
import { useState } from "react";

function GraphVisualization(props) {
    const myNodes = props.myNodes;
    const myEdges = props.myEdges;

    console.log(myNodes);

    const graph = {
        nodes: myNodes,
        edges: myEdges
        /*
        nodes: [{id: 0, 
          label: "hi", 
          fixed:{x:true, y:true,}, 
          x:100, 
          y:100},
          {id: 1, 
            label: "bye", 
            fixed:{x:true, y:true,}, 
            x:150, 
            y:150}],
        edges: [
          //{from: 0, to: 1},
        ]
        */
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