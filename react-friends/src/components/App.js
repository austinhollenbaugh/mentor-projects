import React from 'react';
import FriendsList from './FriendsList.js';


//extends means "inherits from"
export default class App extends React.Component {
  render() {
    //the html code in the return is jsx
    return (
      <div>
          <h1>The <strong>facebook</strong> Friend Machine</h1>

          <div className="friends">
            <FriendsList />
          </div>
      </div>
    );
  }
}
