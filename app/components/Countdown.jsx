import React from 'react';
import Clock from 'Clock';

let Countdown = React.createClass({
  render: function() {
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    )
  }
})

export default Countdown;
