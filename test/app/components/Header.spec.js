import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../../app/components/Header';
import * as ActionTypes from '../../../app/constants/ActionTypes';

function setup(title) {
  const props = {
    title: title
  };

  const renderer = new ReactShallowRenderer();
  renderer.render(<Header {...props} />);
  const output = renderer.getRenderOutput();

  return { props, output, renderer };
}

describe('Personal note Header component', () => {
  it('should render titles and components correctly for all action types', () => {
    for(let actionType in ActionTypes.titles) {
      const { output } = setup(ActionTypes.titles[actionType]);
      const h3 = output.props.children;

      expect(output.type).to.equal('header');
      expect(h3.type).to.equal('h3');
      expect(h3.props.children).to.equal(ActionTypes.titles[actionType]);
    }
  });
});
