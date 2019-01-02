import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.css'
import View from '../View/View';



export class componentName extends Component {

  // constructor(props) {
  //   super(props);
  //   text = ' textt';

  // }


  /* setText(textt) {
  //   this.setState(){
  //   ...this.state: state;
  //     text: textt;
  //   }
  // }*/

  render() {
    return (
      <div className="row">
        {/* <div className="buttondiv" class="btn-group-vertical">
          <button type="button" class="btn btn-primary" onclick="<View text='hello'/>">Apple</button>
          <button type="button" class="btn btn-primary" onclick="setText('hello')">Samsung</button>
          <button type="button" class="btn btn-primary" onclick="setText('hello')">Sony</button>
        </div>
        <div>
          <View text={text} />
        </div> */}
      </div>
    )
  }
}

export default componentName


