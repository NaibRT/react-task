import moment from 'moment';
import React, { useEffect, useState } from 'react';
import getData from '../../api/data';
import DateContainer from '../../containers/DateContainer/DateContainer';


function CallHistory() {
    const [state, setstate] = useState([]);

    const groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
          (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
          );
          return result;
        }, []); // empty object is the initial value for result object
      };

    useEffect(() => {
       let data = getData().map(x=> {
           x.date = moment(x.date).format('L');
           return x;
        });
       let groupedData = groupBy(data,'date');
       console.log('groupedData',groupedData);
       setstate(groupedData)
    },[])

    return (
        <div className='call-history'>
            {
               
               Object.entries(state).map(x => {
                let now = new Date();
                if(moment(now).format('L') == x[0]){
                return <DateContainer title='Today' data={x[1]}/>

                }else if(moment(now.setDate(now.getDate() - 1)).format('L') == x[0]){
                    return <DateContainer title='Yesterday' data={x[1]}/>
                }else{
                    return <DateContainer title={moment(x[0]).format('LL')} data={x[1]}/>
                }
               }
               )  
            }      
        </div>
    )
}

export default CallHistory
