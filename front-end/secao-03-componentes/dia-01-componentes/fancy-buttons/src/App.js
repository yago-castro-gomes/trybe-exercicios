import './App.css';
import React from 'react';

const handleClick = () => {
  console.log('primeiro click');
}
const handleClick2 = () => {
  console.log('segundo click');
}
const handleClick3 = () => {
  console.log('terceiro click');
}

class App extends React.Component {
  render(){
    return(
      <div>
      <button onClick={ handleClick }>Click 1!</button>
      <button onClick={ handleClick2 }>Click 2!</button>
      <button onClick={ handleClick3 }>Click 3!</button>
      </div>
    )
  }
}

export default App;
