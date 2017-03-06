import React from 'react';
import Nav from 'Nav';

let Main = props => (
  <div>
    <p>Main.jsx Rendered</p>
    <Nav/>
    {props.children}
  </div>
);

export default Main;
