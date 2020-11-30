import React from 'react';

import MovieList from "./images/movie-list.png";
import TeaTimeTopic from "./images/tea-time-topic.png";
import Creativity from "./images/creativity.png";
import GameLanding from "./images/game-landing.png";
import Photograph from "./images/photograph.png";
import SportApp from "./images/sport-app.png";

const Project = [
  {
    id: '1',
    title:"Tea time topic",
    demo:"https://eloquent-murdock-a443bb.netlify.app/",
    code: '',
    image: TeaTimeTopic,
    description: 'It is a website which contains lists of discurve topic',
    type:'js'
  },
  {
    id: '2',
    title:"Movies",
    demo:"https://awesome-bell-8933a4.netlify.app/",
    code:'',
    image: MovieList,
    description: 'It is a website that contains list of great movies that are released in 2020',
    type:'react'
  },
  {
    id: '3',
    title:"The Creativity crew",
    demo:"https://wizardly-beaver-3a02b2.netlify.app/",
    code: '',
    image: Creativity,
    description:'It is a website that describes people who work in a team',
    type: '#HTML #CSS #responsive'
  },
  {
    id: '4',
    title:"Game landing",
    demo:"https://ravinalamada.github.io/game-landing-page/",
    image: GameLanding,
    description:'It is a website that talks about talks about game which can be interested by people who loves playing game.',
    type:'#HTML #CSS #responsive'
  },

  {
    id: '5',
    title:"Photograph",
    demo:"https://ravinalamada.github.io/front-end-finals/",
    image: Photograph,
    description:'It is a website that talks about photograph which shows many kinds of good pictures that have been taken.',
    type: '#HTML #CSS #responsive'
  },

  {
    id: '6',
    title:"Sport app",
    demo:"https://ravinalamada.github.io/front-end-assessment/",
    code:'',
    image: SportApp,
    description:'It is a website that talks about sport which can be intesterd by sporty people.',
    type: '#HTML #CSS #responsive'
  }

]

export default Project;
