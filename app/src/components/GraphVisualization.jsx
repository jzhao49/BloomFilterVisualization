import Graph from "react-graph-vis";
import { useState,  useEffect} from "react";

function GraphVisualization(props) {
    const myNodes_ = props.myNodes;
    const myEdges_ = props.myEdges;
    let myNodes = myNodes_;
    let myEdges = myEdges_;

    //useEffect(() => {
      console.log(myNodes_);
      myNodes = myNodes_;
    //}, [myNodes_]);

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