import React, {FC} from 'react';
import {render} from 'react-dom';
import './index.scss';
import * as _ from 'lodash';


const App = () => {
  return (<>
    <h1>Welcome to my configuration WebPack</h1>
  </>)
}

export default App;


render(<App />, document.getElementById('app'));
