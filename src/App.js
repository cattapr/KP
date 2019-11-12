import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      users: [],
      textAreaMessage: ''    
    }
  }

  fetchUser = async (id) => {
      try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json(); 
      console.log(data);
     this.setState({
        user: data
     });

    } catch (error) {
      console.log(error);
    }
  };

  fetchAllUsers = async () => {
      try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      const data = await response.json(); 

     this.setState({
        users: data
     });
    } catch (error) {
      console.log(error);
    }
  };


  componentDidMount() {
    this.fetchAllUsers();
  }


  actions = {
      getUserById: id => {
         this.fetchUser(id);
      },

      handleTextAreaInput: e => {
        e.preventDefault();
        console.log(e.target.textarea.value);

        this.setState({
          textAreaMessage: 'Tack för ditt meddelande!'
        }) 
      }
  };

  

  render(){
    return (
      <Router>
        <div>
          <div className="w10 relative">
              <Header />

              <Route exact path="/" render={() => <Home {...this.state} {...this.actions} />} />
              <Route exact path="/users" render={() => <Users {...this.state} {...this.actions} />} />
              <Route path="/user/:id" render={() => <User {...this.actions} {...this.state} />} />
              
              <Footer />
          </div>    
          </div>
      </Router>
    )
  }
}

export default App;