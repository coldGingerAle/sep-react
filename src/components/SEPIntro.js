import React, { Component } from 'react';
import FadeUnit from './FadeUnit'
import AnimatedWord from './AnimatedWord'
import { Transition } from 'react-transition-group'

class SEPIntro extends Component {
  state = { show: false }

  componentDidMount() {
    this.setState({
      show: true
    })
  }

  handleToggle() {
    this.setState(({ show }) => ({
      show: !show
    }))
  }

  render() {
    const { show } = this.state
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(<FadeUnit show={show} delay={300 + i * 25} increment={0.01 * i}/>)
    }
    return (
      <div>
        <div>
          <FadeUnit show={show} delay={300} increment={1}>S</FadeUnit>
          <FadeUnit show={show} delay={1450} increment={1}>TUDENT</FadeUnit>
        </div>
        <div>
          <FadeUnit show={show} delay={300 + 500} increment={1}>E</FadeUnit>
          <FadeUnit show={show} delay={1450 + 500} increment={1}>MPOWERMENT</FadeUnit>
        </div>
        <div>
          <FadeUnit show={show} delay={300 + 1000} increment={1}>P</FadeUnit>
          <FadeUnit show={show} delay={1950 + 500} increment={1}>ROJECT</FadeUnit>
        </div>
        <div style={{marginTop: 8}}>
          <FadeUnit show={show} delay={1450} increment={1}>A</FadeUnit>
          <FadeUnit show={show} color={"white"} delay={2600} increment={1}>gitate</FadeUnit>
        </div>
        <div>
          <FadeUnit show={show} delay={1950} increment={1}>E</FadeUnit>
          <FadeUnit show={show} color={"white"} delay={3100} increment={1}>ducate</FadeUnit>>
        </div>
        <div>
          <FadeUnit show={show} delay={2450} increment={1}>O</FadeUnit>
          <FadeUnit show={show} color={"white"} delay={3600} increment={1}>rganize</FadeUnit>
        </div>
      </div>
    )
  }
}

export default SEPIntro;
