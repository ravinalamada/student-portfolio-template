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
          <li><Link to='/'>Responsive</Link></li>
          <li><Link to='/js'>Js</Link></li>
          <li><Link to='/react'>React</Link></li>
        </ul>
      </nav>
    <Switch>
      <ul className="lists--container">
        <Route exact path="/">
        {fielteredHtml.map(item => (
          <li key={item.id} className="item">
          <img src={item.image} alt={item.title} />
          <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div>
          <a src={item.demo}>Demo</a>
          <a src="">Code</a>
          </div>
          </div>
          </li>))}
          </Route>
          <Route exact path="/js">
              {fielteredJs.map(item => (
                <li key={item.id} className="item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  <div>
                    <a src={item.demo}>Demo</a>
                    <a src="">Code</a>
                  </div>
                  </div>
                </li>
                ))}
              </Route>
            <Route exact path="/react">
            {fielteredReact.map(item => (
              <li key={item.id} className="item">
                  <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div>
                    <a src={item.demo}>Demo</a>
                    <a src="">Code</a>
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