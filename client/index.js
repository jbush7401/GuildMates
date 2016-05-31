/**
 * Created by jbush_000 on 5/29/2016.
 */
var React = require("react");
var ReactDOM = require("react-dom");

var Test = React.createClass({
  render: function() {
    return (
      <div>
        Rocky Smells Funny
      </div>
    );
  }
});

ReactDOM.render(<Test />, document.getElementById("content"));