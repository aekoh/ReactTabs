import React from 'react';
import './App.css';
import Tabs from "./components/Tabs";

class App extends React.Component {
  // Set state/active
  constructor(props) {
    super(props);
  // default to tabOne
    this.state = {active: 'tabOne'};
  }
  render() {
    // set id for const's determining which ever tab is active
    const content = {
      tabOne: 'Tab 1',
      tabTwo: 'Tab 2',
      tabThree: 'Tab 3',
    };
  return (
    <div className="App">
    <h1>React Tabs</h1>
    <Tabs
     active={this.state.active}
     // changes to selected tab when clicked
     // setting keys for tabs
     onChange={active => this.setState({active})}
    > 
      <div key="tabOne">Tab 1</div>
      <div key="tabTwo">Tab 2</div>
      <div key="tabThree">Tab 3</div>
    </Tabs>
    <h2>Content</h2>
    <p>{content[this.state.active]}</p>
    </div>
  );
}
};

export default App;
