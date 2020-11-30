import React, {useState} from 'react';
import {BrowserRouter as Router,Link, Route, Switch} from 'react-router-dom';
import ProjectsData from '../ProjectsData';

function Projects() {
  const [data, setData] = useState(ProjectsData);

  const fielteredJs = data.filter(data => data.type === 'js');
  const fielteredReact = data.filter(data => data.type === 'react');
  const fielteredHtml = data.filter(data => data.type === '#HTML #CSS #responsive')
  console.log(fielteredJs, fielteredReact, fielteredHtml);

  return (

    <Router>
      <nav className='nav'>
        <h2>Projects</h2>
        <ul className="list--projects">
          <li><Link className="projects__link" to='/'>Responsive</Link></li>
          <li><Link className="projects__link" to='/js'>Js</Link></li>
          <li><Link className="projects__link" to='/react'>React</Link></li>
        </ul>
      </nav>
    <Switch>
      <ul className="lists--container">
        <Route exact path="/">
            {fielteredHtml.map(item => (
              <li key={item.id} className="item">
              <img className='projects--img' src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="link--container">
                  <a className="projects__link" href={item.demo}>Demo</a>
                  <a className="projects__link" href="">Code</a>
                </div>
              </div>
              </li>
            ))}
          </Route>
          <Route exact path="/js">
              {fielteredJs.map(item => (
                <li key={item.id} className="item">
                  <img className='projects--img' src={item.image} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div>
                      <a className="projects__link" href={item.demo}>Demo</a>
                      <a className="projects__link" href="">Code</a>
                    </div>
                  </div>
                </li>
                ))}
              </Route>
            <Route exact path="/react">
            {fielteredReact.map(item => (
              <li key={item.id} className="item">
                <img className='projects--img' src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div>
                    <a className="projects__link" href={item.demo}>Demo</a>
                    <a className="projects__link" href="">Code</a>
                  </div>
                </div>
              </li>
              ))}
            </Route>
          </ul>
        </Switch>
    </Router>
  )
}

        export default Projects
