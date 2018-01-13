import React, { Component } from 'react';
import FadeUnit from './FadeUnit';
import AnimatedText from './AnimatedText';
import AnimatedWord from './AnimatedWord';
export default class LandingPageImage extends Component {
  render() {
    const show = this.state;
    const mission = "We believe in democracy, the wisdom of the crowd, and the power of cooperation. "
    const mission2 = "By stream-lining students' access to already existing resources and providing settings for collaborative problem-solving and innovation,"
    const mission3 = " we can generate a culture of learning and civic engagement that lasts long after graduation.";
    return(
      <div id="our-mission" className="col s12">
        <h1>OUR MISSION</h1>
        <div className="col s10 offset-s1">
          <p>
            <AnimatedText fontSize={"0.8em"} color={"white"}>{mission}</AnimatedText>
          </p>
          <p>
            <AnimatedText offsetAccumulator={2500} fontSize={"0.8em"} color={"white"}>{mission2}</AnimatedText>
          </p>
          <p>
            <AnimatedText offsetAccumulator={6000} fontSize={"0.8em"} color={"white"}>{mission3}</AnimatedText>
          </p>
        </div>
      </div>
    )
  }
}
