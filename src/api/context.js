import React,{ createContext, useState, useEffect } from 'react';
import axios from 'axios'
export const DataContext = createContext({
    model:{},
    detailModel:{},
    data:{},
    handleCarousel:()=>{},
    handlePrev:()=>{},
    handleNext:()=>{},
    setModel:()=>{},
    setDetailModel:()=>{},
    setData:()=>{}
})


export const DataProvider = ({children}) => {
    const [data,setData] = useState({})
    const [model,setModel] = useState({})
    const [detailModel,setDetailModel] = useState({})

    const handleCarousel = (carousel,carouselItem,margin) => {
        let isSet = false
        if(!isSet){
            var item = document.querySelector(`.${carouselItem}`)
            var items = document.querySelectorAll(`.${carouselItem}`)
            var carousel = document.querySelector(`.${carousel}`)
            var current = 0
            var max = items.length
            var move = item.clientWidth + margin
            var startMove = 0
        }
        setInterval(()=>{
            if(current < max - 3){
                setTimeout(()=>{
                    carousel.style.transition = 'all 1s ease-in-out'   
                },1000)
                current++
                carousel.style.transform = `translateX(-${move}px)`
                move += item.clientWidth + margin
            }else{
                carousel.style.transition = 'none'   
                carousel.style.transform = `translateX(${startMove}px)`
                current = 0
                move = item.clientWidth + margin
                }    
            },2000)

    }
    const handlePrev = () =>{}
    const handleNext = () =>{}

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
            handlePrev,
            handleNext,
            handleCarousel,
            setData,
            setModel,
            setDetailModel
        }}>
            {children}
        </DataContext.Provider>
    )
}