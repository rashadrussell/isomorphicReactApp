//require('node-jsx').install({extension: '.jsx', harmony: true});
var express = require('express');
var app     = express();
var config  = require('./config.js');
var routes  = require('./app/js/routes.jsx');
var Html    = require('./app/js/components/html/html.jsx');
var React   = require('react');
var ReactDOM = require('react-dom/server');
var Router   = require('react-router');
var RouterLocation = require('history').createLocation;

app.use(express.static(__dirname+'/app'));

// route middleware that will happen on every request
app.use(function(req, res, next) {
  Router.match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var content = ReactDOM.renderToString(Router.RoutingContext({renderProps}));
      var data = {body: content};
      var html = ReactDOM.renderToStaticMarkup(Html(data));
      res.status(200).send('<!DOCTYPE html>' + html);
    } else {
      res.status(404).send('Not found')
    }
  });
});



app.listen(config.port, function() {
  console.log('Server listening at host: %s', config.host);
});