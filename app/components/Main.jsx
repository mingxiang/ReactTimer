import React from 'react';
import Nav from 'Nav';

let Main = props => (
  <div>
    <Nav/>
    <div className="row">
      <div className="column small-centered medium-6 large-4">
        {props.children}
      </div>
    </div>

  </div>
);

export default Main;
