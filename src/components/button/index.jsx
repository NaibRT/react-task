import React from 'react';

const Index = ({text,clas,click}) => {
    return (
       <button onClick={click} className={`btn ${clas}`}>{text}</button>
    );
}

export default Index;
