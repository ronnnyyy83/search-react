import { configure } from '@storybook/react';

const req = require.context('../src/storybook', true, /\.stories\.js$/);

function loadStories() {
  // You can require as many stories as you need.
  // e.g. require('../stories/index.js');
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);