// Code Keypad Component Here
import React from 'react';

<<<<<<< HEAD
export default class Keypad extends React.Component {
=======
exxport default class Keypad extends React.Component {
>>>>>>> 497cdcfc50031e890c5b73465519e2419dd898be
   handleInputPassword = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input 
          type="password"
          onKeyUp={this.handleInputPassword} 
        />
      </div>
    )
  }
}