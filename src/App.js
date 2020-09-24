import React, { Component } from 'react';
import Homepage from './pages/HomePage/Homepage';
import {Switch, Route} from 'react-router-dom';
import AssemblerMain from './pages/Assembler/AssemblerMain';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import Final from './pages/Final/Final';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path='/edit' component={AssemblerMain} />
          <Route exact path='/create' component={CreateProduct} />
          <Route exact path="/final" component={Final} />
        </Switch>
      </div>
    );
  }
}

export default App;
