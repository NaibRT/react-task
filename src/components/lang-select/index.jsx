import React from 'react';

export default function Index({option=[],clas}) {
  return (
    <div className={`lang-select-wrapper ${clas}`}>
        <select className={`lang-select`}>
           {
               option.map((x,i) => (<option key={`lang-${x.id}`} value={x.id}>{x.name}</option>))
           }
        </select>
    </div>

  );
}
