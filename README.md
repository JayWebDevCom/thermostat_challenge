### Thermostat Challenge

#### Description
This is a test driven object oriented app written to manipulate a thermostat to control temperature. The object oriented app logic is written in javascript using the jQuery library and the application runs on Sinatra framework.

#### Configutation
Clone this repo
run `$ bundle install`
run `$ rackup`

This application makes an automatic ajax request to openweathermap for a reading of external temperature. There is an onchange function that runs on the dropdown menu of cities which makes API calls requesting temperature data for the city selection.

#### Functionality
Clicking the `up` and `down` buttons changes the desired temperature. Clicking the `reset` button returns the thermostat temperature to 20°C.
The powersave button changes the temperature at which the 'too hot' or 'too cold' warning errors are thrown. The powersave option is activated by default.

#### Tests
Navigate to SpecRunner.html in your browser outside of Sinarta to view the jasmine based test output.
HTML fixtures are used to provide a workable DOM for the tests.
