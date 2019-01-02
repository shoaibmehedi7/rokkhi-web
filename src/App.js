import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Drop from './Drop/Drop'
import Footer from './Footer/Footer'
import Button from './Button/Button'
import 'bootstrap/dist/css/bootstrap.min.css';




//************************************************************* */
const admin = require('firebase');
var config = {
  apiKey: "AIzaSyAjt_ff90T_Ch92pGg6g_sAtJkakCgI5WA",
  authDomain: "nsuslideshare.firebaseapp.com",
  databaseURL: "https://nsuslideshare.firebaseio.com",
  projectId: "nsuslideshare",
  storageBucket: "nsuslideshare.appspot.com",
  messagingSenderId: "603965086262"
};
admin.initializeApp(config);
var db = admin.database();
var myRef = db.ref("DEPT").child("ECE").child("Slides").child("CSE225");

myRef.on("child_added", function (snapshot, prevChildKey) {
  var key = snapshot.key;
  console.log(key);
  var val = snapshot.val();
  console.log(val);
});
//************************************************************* */


class App extends Component {
  render() {
    return (
      <div className="App">
        <Drop />
        <Button />
        {/* <h1><br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <br></br></h1> */}

        <Footer />
      </div>
    );
  }
}

export default App;
