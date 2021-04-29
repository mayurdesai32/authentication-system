// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbars from './component/Navbars';
import Home from './component/Home';
import About from './component/About';

import Login from './component/Login';
import Register from './component/Register';
import Logout from './component/Logout';
function App() {
  return (
    <>
      <Navbars />
      <Switch>
        {/* <Route exact path='/' component={} /> */}
        <Route exact path='/' component={Home} />

        <Route path='/about' component={About} />

        <Route path='/login' component={Login} />

        <Route path='/register' component={Register} />
        <Route exact path='/logout' component={Logout} />
      </Switch>
    </>
  );
}

export default App;
