import React from 'react';
import './App.css';
import Tabs from "./components/Tabs";

class App extends React.Component {

  render() {
    // set id for const's determining which ever tab is active
  return (
    <div className="App">
    <Tabs/>
    </div>
  );
}
};

export default App;
