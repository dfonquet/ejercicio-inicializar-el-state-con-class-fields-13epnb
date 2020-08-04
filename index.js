import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

//class App extends Component {

  class App extends Component {
  state = {name : 'Daniel'};

 render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Este componente de ejemplo es para que veas como inicializar el estado de otra forma. ¡Prueba!
        </p>
      </div>
    );
  }
}

//render(<App />, document.getElementById('root'));


// haz que ese constructor desaparezca!
  // usa las nuevas Class Fields para inicializar el state
  // como te indica este post: http://aprendiendoreact.com/post/como-inicializar-el-state-de-un-componente-con-class-properties/