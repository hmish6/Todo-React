import React from 'react'
import Heading from '../../atoms/Heading/Heading';
import Navigation from '../../organisms/Navigation/Navigation';

import './StartupTemplate.css';

const StartupTemplate = (props) => 
  <div className="App">
    <Heading level={1} text="My Todo" />
    <div>
      <Navigation>
        <Navigation.Item className="" to="/new" text="Add New Task" />
        <Navigation.Item
          className=""
          to="/pending"
          text="Show Pending Tasks"
        />
        <Navigation.Item
          className=""
          to="/completed"
          text="Show Completed Taks"
        />
      </Navigation>
      <div className="routing">
        {props.children}
      </div>
    </div>
  </div>

export default StartupTemplate;