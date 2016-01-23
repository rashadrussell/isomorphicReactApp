var React = require('react'),
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute;

var App   = require("./components/app/app.jsx"),
    Home  = require("./components/home/home.jsx"),
    Users = require("./components/users/users.jsx"),
    NotFound = require("./components/notFound/notFound.jsx");

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/users" component={Users} />
    <Route path="*" component={NotFound} />
  </Route>
);

module.exports = routes;