var React = require('react');

var WeatherMessage = (props) => {
  var location = props.location;
  var temp = props.temp;

  return (
    <p>It's {temp} in {location}</p>
  );
}

module.exports = WeatherMessage;