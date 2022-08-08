import React, { useState } from 'react';
import Button from '../button';

const Index = ({option=[]}) => {
    const [active, setActive] = useState(null);

    function accardionHandler(index){
        if(active === index){
            setActive(null);
        }else{
            setActive(index);
        }
    }
    return (
        <div className='accardion'>
            <div className='accardion-wrapper'>
                {
                    option.map((x,i) => (
                        <div onClick={() => accardionHandler(i)} key={`accardion-item-${i}`} className={`accardion-item ${active ===i && 'accardion-item-active'}`}>
                          <h5 className='accardion-head'>{x.question}</h5>
                          <p>{x.answer}</p>
                        </div>
                    ))
                }

            </div>
              <Button text='Daha çox'/>
        </div>
    );
}

export default Index;
