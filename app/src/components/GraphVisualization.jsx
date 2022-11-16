import Graph from "react-graph-vis";
import { useState,  useEffect} from "react";

function GraphVisualization(props) {
    const myNodes = props.myNodes;
    const myEdges = props.myEdges;

    //useEffect(() => {
      console.log(myNodes);
    //}, [myNodes]);

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