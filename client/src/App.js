import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Appbar from './Appbar.js';
import AddTodo from './AddTodo.js';
import List from './List.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('/api/items')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          items: responseJson,
          isLoading: false
        });
      }).catch((error) => {
        console.error(error);
      });
  }

  handleDelete = (item) => {
    return fetch('/api/items/' + item, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then((responseJson) => {
      this.setState({
        items: responseJson,
        isLoading: false
      });
    }).catch((error) => {
      console.error(error);
    });
  }

  handleAdd = (formTitle, formText) => {
    return fetch('/api/items', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify({
          title: formTitle,
          text: formText
        })
    }).then(response => response.json())
    .then((responseJson) => {
      this.setState({
        items: responseJson,
        isLoading: false
      });
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Appbar />
        <List items={this.state.items} deleteTodo={this.handleDelete}/>
        <AddTodo addTodo={this.handleAdd}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
