import React from 'react';
import Card from './Card';

function SearchList({ filteredPersons, filteredCards }) {
    console.log(filteredCards);
  //const filtered = filteredPersons.map(person =>  <Card key={person.id} person={person} />);
  const filtered = filteredCards.map(card =>  <Card key={card.name} card={card} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;