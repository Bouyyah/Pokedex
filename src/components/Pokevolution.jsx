import React from "react";

import "../styles/evolutions.css";

function Pokevolution({ evolutionData }) {
  //
  if (evolutionData)
    return (
      <div className='evolutions'>
        {evolutionData
          .sort((first, second) => first.id - second.id)
          .map((evo, index) => (
            <div key={index} className='evolution-card'>
              <p>
                {evo.id < 10
                  ? `#00${evo.id}`
                  : evo.id < 100
                  ? `#0${evo.id}`
                  : evo.id}
              </p>
              <div className={`evo-image ${evo.types[0]}-gradient`}>
                <img src={evo.image} alt={evo.name}></img>
              </div>
              <p>{evo.name}</p>
            </div>
          ))}
      </div>
    );
}

export default Pokevolution;
