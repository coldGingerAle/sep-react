import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Tilt from './Tilt';

export default class OurResources extends Component {
  render() {
    const show = this.state;
    const particles = (
      <Particles params={
        {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
          "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
          }
        }
      }/>
    )
    return(
      <div id="our-resources" className="col s12 row">
        <div className="col s10 offset-s1">
          <h1>OUR RESOURCES</h1>

          <div className="col s12 m4 l4 department-section">
            <Tilt><img src="https://i.imgur.com/S36aFl5.png"/></Tilt>
            <h1>Biology</h1>
            <p>Discover how life has changed and what it is.</p>
          </div>

          <div className="col s12 m4 l4 department-section">
            <Tilt><img src="https://i.imgur.com/cugympt.png"/></Tilt>
            <h1>Chemistry</h1>
            <p>Explore the nature of matter with QC faculty.</p>
          </div>
          <div className="col s12 m4 l4 department-section">
            <Tilt><img src="https://i.imgur.com/TbPuP6n.png"/></Tilt>
            <h1>Economics</h1>
            <p>Whats money got to do with it?</p>
          </div>
          <div className="col s12 m4 l4 department-section">
            <Tilt><img src="https://i.imgur.com/k8IqoDQ.png"/></Tilt>
            <h1>Philosophy</h1>
            <p>Why does any of this science stuff work anyway?</p>
          </div>
          <div className="col s12 m4 l4 department-section">
            <Tilt><img src="https://i.imgur.com/1tZ1OpR.png"/></Tilt>
            <h1>Political Science</h1>
            <p>How should we organize ourselves?</p>
          </div>
          <div className="col s12 m4 l4 department-section">
            <Tilt><img src="https://i.imgur.com/4O9EOno.png"/></Tilt>
            <h1>Sociology</h1>
            <p>Understand the forces that shape our communities.</p>
          </div>
        </div>
      </div>
    )
  }
}
