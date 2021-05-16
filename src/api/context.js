import React,{ createContext, useState, useEffect } from 'react';
import axios from 'axios'
import Data from './copy.json'
export const DataContext = createContext({
    model:{},
    detailModel:{},
    data:{},
    handleCarousel:()=>{},
    handleControls:()=>{},
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
                current++
                carousel.style.transform = `translateX(-${move}px)`
                move += item.clientWidth + margin
            }else{
                carousel.style.transition = 'none'   
                carousel.style.transform = `translateX(${startMove}px)`
                current = 0
                move = item.clientWidth + margin
                    setTimeout(()=>{
                        carousel.style.transition = 'all 1s ease-in-out'   
                    },1000)
                }    
        },2000)

    }

    const handleControls = (next,prev,current,move,carousel,carouselItem,margin) =>{
        var items = document.querySelectorAll(`.${carouselItem}`)
        var carousel = document.querySelector(`.${carousel}`)
        var width = items[0].clientWidth + margin
        var max = items.length
        var startMove = 0
        if(current < max && prev === null){
            carousel.style.transform = `translateX(-${move}px)`
        }else if(current >= -1 && next === null){
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
        setData(Data)
    },[])

    
    return(
        <DataContext.Provider value={{
            data,
            model,
            detailModel,
            handleControls,
            handleCarousel,
            setData,
            setModel,
            setDetailModel
        }}>
            {children}
        </DataContext.Provider>
    )
}