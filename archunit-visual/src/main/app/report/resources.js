'use strict';

const getResources = () => ({
  graph: JSON.parse(window.jsonGraph),
  violations: JSON.parse(window.jsonViolations)
});

module.exports = {getResources};