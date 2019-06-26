import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from './components/Dashboard';
import SingleProject from './components/SingleProjectPage';

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path="/project/:id" component={SingleProject}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
