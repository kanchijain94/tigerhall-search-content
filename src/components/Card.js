import React from 'react';

function Card({card}) {
  return(
    <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5 flex">
      <img className="h3 w3 dib" style={{width:"50%",height:"50%"}} alt={card.name} src={card.image.uri} />
      <div>
        <h2>{card.name}</h2>
        <p>{card.experts[0]["firstName"]} {card.experts[0]["lastName"]}</p>
      </div>
    </div>
  );
}

export default Card;