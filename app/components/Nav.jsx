import React from 'react';
import {Link, IndexLink} from 'react-router';

let Nav = React.createClass({
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active-link" activeStyle = {{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active-link" activeStyle = {{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created By <a href="https://github.com/mingxiang" target="_blank">Ming Xiang</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})

export default Nav;
