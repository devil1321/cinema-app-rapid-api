import React,{useState,useEffect,useContext} from 'react'
import Nav  from '../Components/Nav'
import { DataContext } from '../api/context'
const Details = () => {
    const { detailModel,data, setDetailModel} = useContext(DataContext)
    const [categories,setCategories] = useState([])
    if(detailModel !== null){
        var {age, cast, genres, imdbID, imdbRating, imdbVoteCount, overview, poster, streamingLink, title, year } = detailModel
    }
    useEffect(()=>{
        if(detailModel === null){
            let savedModel = localStorage.getItem('movie')
            savedModel = JSON.parse(savedModel)
            setDetailModel(savedModel)
            if(data.length > 0 && savedModel === null){
                localStorage.setItem('movie',JSON.stringify(data[0]))
                window.location.reload()
            }
        }else{
            localStorage.setItem('movie',JSON.stringify(detailModel))
        } 
        if(data.length > 0 && categories.length === 0){
            let tempCategories = [...categories]
            data.forEach(item=>{
                item.genres.forEach(genre =>{
                    if(!tempCategories.includes(genre)){
                        tempCategories.push(genre)
                    }
                })
            })
            setCategories(tempCategories)
        }
    },[detailModel,data,categories])
    return (
        <div className="details">
            <Nav />
            {detailModel !== null ? 
            <div className="details__content">
                <div className="details__image-container">
                    <img src={poster} alt="" className="detail__image" />
                    <div className="details__count">
                        <p>IMBD Rating : {imdbRating}</p>
                        <p>IMBD Vote Count : {imdbVoteCount}</p>
                    </div>
                </div>
                <div className="details__text">
                    <h1>{title.replaceAll("#","").toUpperCase()}</h1>
                    <h2>{year}<i className="fa fa-film fa-1x"></i> <a href={streamingLink}>Netflix</a> | <a href={`https://www.imdb.com/title/${imdbID}`}>IMDb</a></h2>
                    <h3>{age < 18 ? `Teen | ${age}` : `Adult | ${age}`}</h3>
                    <p>{overview}</p>
                    <p>{cast.map((actor,index) => {
                        if(index < cast.length - 1){
                            return actor + ", "
                        }else{
                            return actor
                        }
                        })}
                    </p>
                    <p>{genres.map((genre,index) =>{
                        if(index < genres.length - 1){
                            return genre + ", "
                        }else{
                            return genre
                        }
                    })}</p>
                </div>
            </div>
            : null }
            <div className="details__c-nav">
                <ul className="details__c-nav-list">
                   
                </ul>
            </div>
        </div>
    )
}

export default Details
