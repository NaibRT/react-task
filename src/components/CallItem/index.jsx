import moment from 'moment';
import React from 'react';
import arrow from '../../assets/icons/arrowup.png';
import user from '../../assets/icons/user.svg';
import './callItem.scss';



function index({item}) {
    return (
        <div className='call-item'>
           <div className='call-item-body'>
             <img alt='' className='avatar' src={user}/>
              <div className='call-number'>
                 <div>{item.phoneNumber}</div>
                  <div className='call-type'>
                      <img alt='' className='miss' src={arrow}/>
                      <span>{item.phoneType}</span>
                  </div>
              </div>
           </div>

            <div className='call-time'>
               { moment(item.date).format('LT')}
            </div>

        </div>
    )
}

export default index
