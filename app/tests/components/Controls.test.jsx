import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Controls from 'Controls';

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  })

  describe('render', () => {
    it('should render pause when started', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>),
          $el = $(ReactDOM.findDOMNode(controls)),
          $pauseButton = $el.find('button:contains(Pause)');

          expect($pauseButton.length).toBe(1);
    })

    it('should render start when paused', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>),
          $el = $(ReactDOM.findDOMNode(controls)),
          $pauseButton = $el.find('button:contains(Start)');

          expect($pauseButton.length).toBe(1);
    })
  })
})
