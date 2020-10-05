import React from 'react';
import './App.css';
import Tabs from "./components/Tabs";

  class App extends React.Component {
    render(){
      return(
        <div className="tabsLayout">
          <h1>Front-end Frameworks</h1>
         <Tabs>
           <li label="React">
             <div>
               <p>
              React React is developed and maintained by Facebook and used in their products,
              including Instagram and WhatsApp. It has been around for around since 2013, so 
              it’s not exactly new. It’s also one of the most popular projects on GitHub, with
              more than 150,000 stars at the time of writing. Some of the other notable companies
              using React are Airbnb, Uber, Netflix, Dropbox, and Atlassian. Sounds good to me.
                 
               </p>
             </div>
           </li>
           <li label="Angular">
             <div>
             
               <p>Angular has been around since 2016, making it slightly younger than React,
                  but it’s also not a new kid on the block. It’s maintained by Google. In 2018 
                  was used in more than 600 hundred applications in Google such as Firebase Console,
                  Google Analytics, Google Express, Google Cloud Platform and more. Outside of Google,
                  Angular is used by Forbes, Upwork, VMWare, and others.
               </p>
             </div>
           </li>
           <li label="Both">
             <div>
               <p>
                 THEY ARE BOTH GREAT!
               </p>
             </div>
           </li>
         </Tabs>
        </div>
        
      )
    }
  }
  
  
export default App;
