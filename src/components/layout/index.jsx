import React from 'react';
import Header from '../header';
import Footer from '../footer';


const Index = ({children}) => {
    return (
        <div className='Layout'>
            <Header/>
            {children}
           <Footer/> 
        </div>
    );
}

export default Index;
