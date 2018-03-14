import React, {Component} from 'react';
import ImagePerfil from '../assets/images/Lesly.jpg';
import Hobbies from './Hobbies';

class AcercaMi extends Component {
  constructor() {
    super();

    return(
      <div>
        <p>Soy Lesly Nomberto Coronado, especializada como Front-end developer</p>
        <Hobbies/>
      </div>
    );
  }
}
