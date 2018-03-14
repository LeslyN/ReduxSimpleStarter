import React, {Component} from 'react';
import ImagePerfil from '../assets/images/Lesly.jpg';
// import Hobbies from './Hobbies';

class AcercaMi extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Lesly',
      ImageP: 'ImagePerfil',
      hobbies : ['Musica', 'pintura'],
    };
  };

  render() {
    const arrayHobbies = this.state.hobbies.map((hobbie) => {
      return (
        <div>
          <ul>
            <li>{hobbie}</li>
          </ul>
        </div>
      );
    });

    return(
      <div>
        <p>{this.state.name}</p>
        <img src={this.state.ImageP}/>
        {arrayHobbies}
      </div>
    );
    
  }
}

export default AcercaMi;