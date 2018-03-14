import react from 'react';

const listHobbies = [Musica, Pintura, Peliculas];

const Hobies = () => {
  const hobbies = listHobbies.map(listHobbie => {
    <div>
      <li>{listHobbie}</li>
    </div>
  });
  return (
    <div>
      {listHobbie}
    </div>
  );
}