var React = require('react');
var ReactDOM = require('react-dom');

var test = React.createClass({
  render: function () {
    return (
      <div>Hello mom</div>
    )
  }
})

ReactDOM.render(<test />, document.getElementById('app'))