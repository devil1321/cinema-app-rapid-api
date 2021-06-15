import axios from 'axios';
import React,{ createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Genres from './generes.json'

export const DataContext = createContext({
    model:{},
    detailModel:{},
    data:{},
    movies:[],
    isSet:false,
    user:null,
    isLogged:false,
    isAuthenticated:false,
    setIsAuthenticated:()=>{},
    setIsLogged:()=>{},
    setUser:()=>{},
    setIsSet:()=>{},
    setMovies:()=>{},
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
    const [movies,setMovies] = useState([])
    const [isSet,setIsSet] = useState(false)

    const [user,setUser] = useState(null)
    const [isLogged,setIsLogged] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(()=>{
        axios.get('https://cinema-app-json-server.herokuapp.com/results')
            .then(res => {
                setMovies(res.data)
                setIsSet(true)
            })
            .catch(err =>{console.log(err)})
            
        axios.get('http://localhost:4000/users/' + 1)
            .then(res => setUser(res.data))
            .catch(err =>{if(err) throw err})

        if(isSet){
            setDataModel(data,movies,Genres)
        }
       
    },[isSet])
    
    const handleControls = (next,prev,current,move,carousel,carouselItem,margin) =>{
        var items = document.querySelectorAll(`.${carouselItem}`)
        var carouselDOM = document.querySelector(`.${carousel}`)
        var width = items[0].clientWidth + margin
        var max = items.length
        var startMove = 0
        carouselDOM.style.transition = "all 1s ease-in-out"
        if(current < max && prev === null){
            carouselDOM.style.transform = `translateX(-${move}px)`
        }else if(current >= -2 && next === null){
            if(move === -width){
                move = move * (-1)
                carouselDOM.style.transform = `translateX(${move}px)`                
            }else{
                move = move * (-1)
                carouselDOM.style.transform = `translateX(${move}px)`
            }
        }else if(current === max || current === -2){
            carouselDOM.style.transform = `translateX(${startMove}px)`
        }
    }
    const setDataModel = (initData,fetchMovies,fetchGenres) =>{
        let tempData = [...initData]
        let tempGenere = []
        fetchMovies.map(data=>{
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
        searchText = searchText.replaceAll(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        searchText = searchText.replaceAll("#","")
        const regex = new RegExp(`^${searchText}`,'gi')
        return item.title.replaceAll("#","").match(regex)
    })
    console.log(matches)
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
            movies,
            isSet,
            user,
            isLogged,
            isAuthenticated,
            setIsAuthenticated,
            setIsLogged,
            setUser,
            setIsSet,
            setMovies,
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