import './App.css';
import React from 'react';
import Wheel from './components/wheel';

import './App.css';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export class App extends React.Component {
  constructor() {
    super();
    this.optionMap = {
      'Fast Food Restaurant' : ['Panda Express', 'Raising Cane\'s', 'Taco Bell', 'Arby\'s', 'McDonald\'s', 'KFC', 'Subway', 'Checkers', 'Five Guys', 'Chick Fil A', 'Krispy Kreme'],
      'Sit down Restaurant' : ['Chico’s', 'Sup Dogs', 'Outback Steakhouse', 'Angus Grill', 'Quarters Bar & Grill', 'Chilli’s', 'Yaba', 'Coastal Fog'],
      'In-Door Activities': ['Space Cadets', 'Greenville Museum of Art', 'Sawyer\'s Fun Park', 'Splashpoint', 'Extravaganza Greenville', 'Stumpy\'s Hatchet House'],
      'Out-Door Activities': ['Riverpark North', 'South Tar RIver Greenway', 'Captain Jack\'s Miniature Golf']
    }
    this.defaultOption = Object.keys(this.optionMap)[0];
    this.choosed = this.defaultOption;

  }

  _onSelect = (option) => {
    this.choosed = option.value;
    this.setState({ choosed: option.value });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>What {this.choosed} should I visit today?</h1>
        <Dropdown options={Object.keys(this.optionMap)} onChange={this._onSelect} value={this.defaultOption} placeholder="Select an option" />
        <Wheel items={this.optionMap[this.choosed]}/>
        </header>
      </div>
    );
  }
}

export default App;
