import React from 'react';

let Clock = React.createClass({
  getDefaultProps: () => {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function (totalSeconds){
    let seconds = totalSeconds%60;
    let minutes = Math.floor(totalSeconds/60);


    return `${(minutes < 10) ? '0'+minutes : minutes}:${(seconds < 10) ? '0'+seconds : seconds}`;
  },
  render: function(){
    let {totalSeconds} = this.props;

    return (
      <div className="clock">
          <span className="clock-text">
            {this.formatSeconds(totalSeconds)}
          </span>
      </div>
    );
  }
});

export default Clock;
