import React from 'react'
import CallItem from '../../components/CallItem'
import './dataContainer.scss'



function DateContainer({title,data = []}) {
    return (
        <div className='date-container'>
            <h6 className='dc-header'>{title}</h6>
            <div className='dc-body'>
              {
                data?.map(item => {
                    return <CallItem item={item}/>
                })
              }
            </div>
        </div>
    )
}

export default DateContainer
