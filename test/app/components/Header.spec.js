import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../../app/components/Header';
import * as ActionTypes from '../../../app/constants/ActionTypes';

function setup() {
  const props = {
    title: ActionTypes.titles.BROWSE_NOTES
  };

  const renderer = new ReactShallowRenderer();
  renderer.render(<Header {...props} />);
  const output = renderer.getRenderOutput();

  return { props, output, renderer };
}

describe('Personal note Header component', () => {
  it('should render correctly', () => {
    const { output } = setup();

    expect(output.type).to.equal('header');

    const h3 = output.props.children;

    expect(h3.type).to.equal('h3');
    expect(h3.props.children).to.equal('Browse Notes');
  });
});
