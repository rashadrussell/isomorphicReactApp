var React = require('react');

var Home = React.createClass({

  componentDidMount: function() {
    console.log('hi');
  },

  render: function() {
    return (
      <h1>Home!</h1>
    );
  }
});

module.exports = Home;