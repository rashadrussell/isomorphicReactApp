var React = require('react');

var Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Web App</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src="./lib/react/react.js"></script>
          <script src="./lib/react-dom/react-dom.js"></script>
          <script src="./js/client.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = Html;