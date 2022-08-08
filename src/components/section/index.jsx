import React from 'react';

const Index = ({title,children}) => {
    return (
        <section className='section'>
            <div className='section-header'>{title}</div>
            <div className='section-body'>
              {children}
            </div>
        </section>
    );
}

export default Index;
