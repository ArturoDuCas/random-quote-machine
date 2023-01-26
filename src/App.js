import './App.css';
import {QuoteBox} from "./components/QuoteBox"
import React from 'react';
import * as ReactRedux from 'react-redux';
import {store} from "./store";


class App extends React.Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <div className="App" >
        <QuoteBox data={this.props.data}/>
      </div>
    );
  }
}

// CONNECT WITH STORE 
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
} 

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Container />
      </Provider>
    );
  }
};

export default AppWrapper;


