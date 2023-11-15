import React from 'react';
import Card from './Card';

function SearchList({ filteredCards }) {
  const filtered = filteredCards.map(card =>  <Card key={card.name} card={card} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;