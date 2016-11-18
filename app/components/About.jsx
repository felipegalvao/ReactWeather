var React = require('react');

var About = (props) => {
  
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a Weather Application built on React. I have 
        built this for The Complete React Web App Developer Course.</p>
        <p>Here are some of the tools I used:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - 
            Javascript Framework
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - 
            API to search weather data by city name
          </li>
        </ul>
      </div>
    );
  }

module.exports = About;