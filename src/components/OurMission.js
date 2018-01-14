import React, { Component } from 'react';
import FadeUnit from './FadeUnit';
import AnimatedText from './AnimatedText';
import AnimatedWord from './AnimatedWord';
export default class OurMission extends Component {
  render() {
    const show = this.state;
    const mission = "We believe in democracy, the wisdom of the crowd, and the power of cooperation. "
    const mission2 = "By stream-lining student's access to already existing resources and providing settings for collaborative problem-solving and innovation,"
    const mission3 = " we can generate a culture of learning and civic engagement that lasts long after graduation.";
    return(
      <div id="our-mission" className="row col s12">
        <div className="col s10 offset-s1">
          <h1>OUR MISSION</h1>
            <div className="mission-paragraph">
              <AnimatedText fontSize={"0.8em"} color={"white"}>{mission}</AnimatedText>
            </div>
            <div className="mission-paragraph">
              <AnimatedText offsetAccumulator={2500} fontSize={"0.8em"} color={"white"}>{mission2}</AnimatedText>
            </div>
            <div className="mission-paragraph">
              <AnimatedText offsetAccumulator={6000} fontSize={"0.8em"} color={"white"}>{mission3}</AnimatedText>
            </div>
        </div>
      </div>
    )
  }
}
