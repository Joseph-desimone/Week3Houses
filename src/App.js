import React, { Component } from 'react';
import { housesApi } from './rest/housesapi';
import { HousesList } from './Components/HousesList';

class App extends Component {
  render() {
    return (
      <div>
        <HousesList/>
      </div>
    )
  }
}

export default App;