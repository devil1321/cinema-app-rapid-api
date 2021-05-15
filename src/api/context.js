import React,{ createContext, useState, useEffect } from 'react';
import axios from 'axios'
export const DataContext = createContext({
    model:{},
    detailModel:{},
    data:{},
    setModel:()=>{},
    setDetailModel:()=>{},
    setData:()=>{}
})


export const DataProvider = ({children}) => {
    const [data,setData] = useState({})
    const [model,setModel] = useState({})
    const [detailModel,setDetailModel] = useState({})

    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://streaming-availability.p.rapidapi.com/search/basic',
            params: {
              country: 'us',
              service: 'netflix',
              type: 'movie',
              genre: '18',
              page: '1',
              language: 'en'
            },
            headers: {
              'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154',
              'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    },[])

    return(
        <DataContext.Provider value={{
            data,
            model,
            detailModel,
            setData,
            setModel,
            setDetailModel
        }}>
            {children}
        </DataContext.Provider>
    )
}