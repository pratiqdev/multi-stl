import React from 'react'
import './App.css';
import STLViewer from 'stl-viewer'

export default class App extends React.Component {
  
render(){


  return (
    <div className="App">
    
      <h2>meep</h2>

      <STLViewer
        url='http://192.168.1.148:3005/content/deskLegFoot.stl'
        width={400}
        height={400}
        modelColor='#B92C2C'
        backgroundColor='#EAEAEA'
        rotate={true}
        orbitControls={true}
      />

    
           


    </div>
  );
}
}

