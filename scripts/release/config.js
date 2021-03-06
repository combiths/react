'use strict';

const dependencies = ['fbjs', 'object-assign', 'prop-types'];

// TODO: enumerate all non-private package folders in packages/*?
const projects = [
  'react',
  'react-art',
  'react-call-return',
  'react-dom',
  'react-reconciler',
  'react-test-renderer',
];

const paramDefinitions = [
  {
    name: 'dry',
    type: Boolean,
    description: 'Build artifacts but do not commit or publish',
    defaultValue: false,
  },
  {
    name: 'path',
    type: String,
    alias: 'p',
    description:
      'Location of React repository to release; defaults to [bold]{cwd}',
    defaultValue: '.',
  },
  {
    name: 'version',
    type: String,
    alias: 'v',
    description: 'Semantic version number',
  },
];

module.exports = {
  dependencies,
  paramDefinitions,
  projects,
};
