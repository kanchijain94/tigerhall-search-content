import React from 'react';

function Card({card}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br-100 h3 w3 dib" alt={card.name} src={card.image.uri} />
      <div>
        <h2>{card.name}</h2>
        <p>{card.name}</p>
      </div>
    </div>
  );
}

export default Card;