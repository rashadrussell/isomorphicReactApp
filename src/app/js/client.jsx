var React = require('react'),
    ReactDOM = require('react-dom'),
    Router   = require('react-router').Router,
    routes   = require('./routes.jsx'),
    createHistory  = require('history').createHistory;

ReactDOM.render((
  <Router history={ createHistory() }>
    {routes}
  </Router> 
), document.getElementById('app'));