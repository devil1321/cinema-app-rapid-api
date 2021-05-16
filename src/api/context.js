import React,{ createContext, useState, useEffect } from 'react';
import axios from 'axios'
import Data from './copy.json'
export const DataContext = createContext({
    model:{},
    detailModel:{},
    data:{},
    handleControls:()=>{},
    setModel:()=>{},
    setDetailModel:()=>{},
    setData:()=>{}
})


export const DataProvider = ({children}) => {
    const [data,setData] = useState([])
    const [model,setModel] = useState({})
    const [detailModel,setDetailModel] = useState({})

    useEffect(()=>{
        // rapid api
        // const options = {
        //     method: 'GET',
        //     url: 'https://streaming-availability.p.rapidapi.com/search/basic',
        //     params: {
        //       country: 'us',
        //       service: 'netflix',
        //       type: 'movie',
        //       genre: '18',
        //       page: '1',
        //       language: 'en'
        //     },
        //     headers: {
        //       'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154',
        //       'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        //     }
        //   };
          
        //   axios.request(options).then(function (response) {
        //       console.log(response.data);
        //   }).catch(function (error) {
        //       console.error(error);
        //   });
        //   end rapid api
        // api json
        // end api json
        
        setDataModel(data,Data)
    },[])
    const handleControls = (next,prev,current,move,carousel,carouselItem,margin) =>{
        var items = document.querySelectorAll(`.${carouselItem}`)
        var carousel = document.querySelector(`.${carousel}`)
        var width = items[0].clientWidth + margin
        var max = items.length
        var startMove = 0
        if(current < max && prev === null){
            carousel.style.transform = `translateX(-${move}px)`
        }else if(current >= -2 && next === null){
            if(move === -width){
                move = move * (-1)
                carousel.style.transform = `translateX(${move}px)`
            }else{
                move = move * (-1)
                carousel.style.transform = `translateX(${move}px)`
            }
        }else if(current === max || current === -2){
            carousel.style.transform = `translateX(${startMove}px)`
        }
    }
    const setDataModel = (initData,fetchData) =>{
        let tempData = [...initData]
        fetchData.results.map(data=>{
            const newModel = {
                age:data.age,
                image:data.backdropURLs.original,
                cast:data.cast,
                countries:data.countries,
                generes:data.generes,
                imdbID:data.imdbID,
                imdbRating:data.imdbRating,
                imdbVoteCount:data.imdbVoteCount,
                overview:data.overview,
                poster:data.posterURLs.original,
                streamingLink:data.streamingInfo.netflix.us.link,
                streamingInfo:data.streamingInfo,
                title:data.title,
                year:data.year
            }
          
            tempData.push(newModel)

        })
        setData(tempData)
    }

    return(
        <DataContext.Provider value={{
            data,
            model,
            detailModel,
            handleControls,
            setData,
            setModel,
            setDetailModel
        }}>
            {children}
        </DataContext.Provider>
    )
}