import React,{Component} from 'react';
import './App.css';
import users from "./data/users";
import Code from './layouts/Code';
import Posts from './layouts/Posts';
import Post from './layouts/Post';
import Login from './layouts/Login';
import Navbar from './common/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";




class App extends Component{

state = { users: users };

search = () => {
    alert("hi")
  }

  render()
  {
      const { users } = this.state;
      console.log(users);
  return (
        <Provider store={store}>
          <div className="App">

        <Router>
            <Navbar />
              <Switch>
              <Route exact path="/login" component={Login} />
              </Switch>
            <Switch>
            <Route exact path="/posts" component={Posts} />
            </Switch>
            <Switch>
            <Route exact path="/post/:id" component={Post} />
            </Switch>
        </Router>
          </div>
      </Provider>
    );
}
}

export default App;
