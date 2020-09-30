import React, { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <div className="tabs">
                {React.Children.map(this.props.children, (child, i) => {
                    let className=`Tabs__button`;
                    if (child.key === this.props.active) {
                        className = `${className} Tabs__button--active`;
                    }
                    return (
                     <div className="Tabs__button"
                     onClick={() => {
                         this.props.onChange(child.key);
                     }}
                     >
                        {child}

                    </div>
                    );
                })}
             <div
              className="Tabs__select"
             />
            </div>
        );
      }
    }
    
    export default Tabs;
