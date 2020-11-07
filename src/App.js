
import React, {Component} from 'react';
// import {OBJViewer, STLED} from 'react-stl-obj-viewer';
import STLED from './stled.js';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            
            stlFile: null,
            stlLink: null,
        };
        this._state = {
            stlLink: 'https://threejs.org/examples/models/stl/binary/colored.stl',
        }
    }

    render() {
        return (
            <div className="App">
                
                
                <div className="container" id="div2">
                    <label htmlFor="obj-file">
                        Load STL by file
                        <br/>
                        <input type="file"
                               name="obj-file"
                               onChange={(e) => {
                                   console.log(e.target.files)
                                   this.setState({
                                       stlFile: e.target.files[0]
                                   })
                               }} placeholder="test"/>
                    </label>
                    {this.state.stlFile ?
                        <STLED
                            onSceneRendered={(element) => {
                                console.log(element)
                            }}
                            sceneClassName="test-scene"
                            file={this.state.stlFile}
                            className="obj"
                            modelColor="#FF0000"/> : null

                    }
                </div>
                
                <div className="container" id="div4">
                    <label htmlFor="obj-link">
                        Load STL by link
                        <br/>
                        <input type="text"
                               name="obj-link"
                               defaultValue={this._state.stlLink}
                               onChange={(e) => {
                                   this._state.stlLink = e.target.value;
                               }}/>
                        <input type="button" value="upload URL" onClick={() => {
                            this.setState({
                                stlLink: this._state.stlLink,
                            })
                        }}/>
                    </label>
                    {this.state.stlLink ?
                        <STLED
                            onSceneRendered={(element) => {
                                console.log(element)
                            }}
                            sceneClassName="test-scene"
                            url={this.state.stlLink}
                            className="obj"
                            modelColor="#FF0000"/> : null
                    }
                </div>
            </div>
        );
    }
}

export default App;