import React from 'react';

const Index = ({text,click,clas}) => {
    return (
        <div className={`category-select-item ${clas}`} onClick={click}>
            {text}
        </div>
    );
}

export default Index;
