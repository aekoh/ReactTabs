import React, { Component } from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

class Tabs extends Component {

    //Setting state and displaying Active Tab
    static propTypes = {
        //Array of Tabs
        children: PropTypes.instanceOf(Array).isRequired,
      }
      constructor(props) {
        super(props);
    
        this.state = {
            //start from beginning of tab array, 0
          activeTab: this.props.children[0].props.label,
        };
      }
      onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
      }

    render() {
        return (
          <div className="tabs">
                <Tab/>
          </div>
        );
      }
    }
    
    export default Tabs;
