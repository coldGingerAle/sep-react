import React, { Component } from 'react';
import Styles from './Styles.js'
import VanillaTilt from 'vanilla-tilt';

class Tilt extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    VanillaTilt.init(this.rootNode, {
      scale: 1.1,
      perspective: 1000
    })
  }
  render() {
    return (
      <div
        ref={node => (this.rootNode = node)}
        className="tilt-root"
      >
        <div>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Tilt;
