import React from 'react';
import Navbar from '../navbar';
import LangSelect from '../lang-select';
import Button from '../button';

const Index = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={require('../../assets/icons/logo.svg').default} alt='logo'/>
                <img src={require('../../assets/icons/image1.svg').default} alt='logo'/>
                <img src={require('../../assets/icons/image2.svg').default} alt='logo'/>
            </div>
          <Navbar/>
          <LangSelect option={[
                {id:1, name:'Az'},
                {id:2, name:'En'},
                {id:3, name:'Ru'}
            ]}/>
            <Button text='Daxil ol'/>
        </div>
    );
}

export default Index;
