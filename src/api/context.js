import React,{ createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import Movies from './movies.json'
import Genres from './generes.json'
export const DataContext = createContext({
    model:{},
    detailModel:{},
    data:{},
    handleDetailModel:()=>{},
    handleSearch:()=>{},
    handleControls:()=>{},
    setModel:()=>{},
    setDetailModel:()=>{},
    setData:()=>{}
})


export const DataProvider = ({children}) => {
    const [data,setData] = useState([])
    const [model,setModel] = useState({})
    const [detailModel,setDetailModel] = useState(null)

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
        setDataModel(data,Movies,Genres)
    
    },[])
    const handleControls = (next,prev,current,move,carousel,carouselItem,margin) =>{
        var items = document.querySelectorAll(`.${carouselItem}`)
        var carousel = document.querySelector(`.${carousel}`)
        var width = items[0].clientWidth + margin
        var max = items.length
        var startMove = 0
        carousel.style.transition = "all 1s ease-in-out"
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
    const setDataModel = (initData,fetchMovies,fetchGenres) =>{
        let tempData = [...initData]
        let tempGenere = []
        fetchMovies.results.map(data=>{
            let genresKeys = Object.keys(fetchGenres)
            data.genres.forEach(genere => {
                genresKeys.forEach(genereKey=>{
                    genereKey = parseInt(genereKey)
                    genere = parseInt(genere)
                    if(genere === genereKey){
                        tempGenere.push(fetchGenres[genereKey])
                    }
                })
            })
            const newModel = {
                id:uuidv4(),
                age:data.age,
                image:data.backdropURLs.original,
                cast:data.cast,
                countries:data.countries,
                genres:tempGenere,
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
            tempGenere = []
        })
        setData(tempData)
    }
    const handleSearch = (data,searchText) =>{
    let matches = data.filter(item=>{
        const regex = new RegExp(`${searchText}`,'gi')
        return item.title.match(regex)
    })
    if(searchText.length === 0){
        matches = []
    }
    matches = matches.map(match=>{
        let model = {
            id:match.id,
            title:match.title.replaceAll("#",""),
        }
        return model
    })
    return matches
    }
    const handleDetailModel = (id) =>{
        setDetailModel(data.find(item => item.id === id))
    }

    return(
        <DataContext.Provider value={{
            data,
            model,
            detailModel,
            handleDetailModel,
            handleSearch,
            handleControls,
            setData,
            setModel,
            setDetailModel
        }}>
            {children}
        </DataContext.Provider>
    )
}