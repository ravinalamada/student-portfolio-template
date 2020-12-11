import React from 'react';

import BirthdayReminder from "./images/birthday-reminder.png";
import Photograph from "./images/photograph.png";
import SportApp from "./images/sport-app.png";

const Project = [
  {
    id: '1',
    title:"Birthday reminder",
    demo: "https://prisca-birthday-app.netlify.app/",
    code:'https://github.com/ravinalamada/birthday-app',
    image: BirthdayReminder,
    description: `It is a website that are used to help people to remember their birthday if they don't remember it. `,
    type:'js'
  },
  {
    id: '5',
    title:"Photograph",
    demo:"https://prisca-photograph.netlify.app/",
    code: 'https://github.com/ravinalamada/front-end-finals',
    image: Photograph,
    description:'It is a website that talks about photograph which shows many kinds of good pictures that have been taken.',
    type: '#HTML #CSS #responsive'
  },

  {
    id: '6',
    title:"Sport app",
    demo:"https://prisca-sport-app.netlify.app/",
    code:'https://ravinalamada.github.io/front-end-assessment/',
    image: SportApp,
    description:'It is a website that talks about sport which can be intesterd by sporty people.',
    type: '#HTML #CSS #responsive'
  }

]

export default Project;
