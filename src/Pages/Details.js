import React,{useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'
import Nav  from '../Components/Nav'
import DetailComment from '../Components/DetailComment'
import MoviesCarousel from '../Components/MoviesCarousel'
import Footer from '../Components/Footer'
import { DataContext } from '../api/context'
const Details = () => {
    const { detailModel,data, setDetailModel,handleDetailModel} = useContext(DataContext)
    const [categories,setCategories] = useState([])
    const [categoryResult,setCategoryResult] = useState([])
    if(detailModel !== null){
        var {age, cast, genres, imdbID, imdbRating, imdbVoteCount, overview, poster, streamingLink, title, year } = detailModel
    }
    const handleResult = (text,data) =>{

        let items = [...document.querySelectorAll('.details__result-item')]
            let time = 0
            items.reverse().forEach(item=> {
                setTimeout(()=>{
                    item.style.animation = 'comesOut 300ms ease-in-out forwards'
                },time+=300)
            })
            setTimeout(()=>{
                let result = data.filter(item=> item.genres.includes(text))
                setCategoryResult(result)
            },time+300)
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
            handleResult('Drama',data)
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
     

        
            let items = document.querySelectorAll('.details__result-item')
            let time = 0
            items.forEach(item=> {
                item.style.top = '50px'
                item.style.opacity = '0'
                setTimeout(()=>{
                    item.style.animation = 'comesIn 300ms ease-in-out forwards'
                },time+=300)
            })
        
    },[detailModel,data,categories,categoryResult])
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
                    {categories.map(category=><li onClick={(e)=>{handleResult(e.target.textContent,data)}} className="details__c-nav-list-item">{category}</li>)}
                </ul>
            </div>

            <div className="details__background">
                <div className="details__result">
                {categoryResult.map((result,index) =>{
                    const {image, poster, title, imdbID, streamingLink,imdbRating,year } = result
                    return      <div className="details__result-item">
                                <Link to="/details" key={index} onClick={()=>{handleDetailModel(result.id)}}>
                                <div className="details__result-image">
                                    <div className="overlay"></div>
                                    <img src={poster} alt="" />
                                </div>
                                </Link>
                                    <div className="details__result-text">
                                        <h3>{title.replaceAll("#","").toUpperCase()}</h3> 
                                        <div>
                                            <a href={`https://www.imdb.com/title/${imdbID}`}>IMDb</a> | <a href={streamingLink}>Netflix</a>{}
                                        </div>                                   
                                        <div className="details__result-text-footer">
                                            <h3>Rating : {imdbRating}</h3>
                                            <h3>Year : {year}</h3>
                                        </div>
                                    </div>
                                </div>
                         
                })}
            </div>
                <div className="details__comments">
                <h2 className="details__comments-title">Comments</h2>
                <div className="details__comments-group">
                    <DetailComment image="/assets/profile-1.jpeg" date="20/12/2012" title={'John Doe'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus leo magna, sit amet pretium nisi blandit ac. Suspendisse tincidunt lobortis massa in sodales. Maecenas ultricies sapien quis nunc dapibus fringilla. Integer eleifend urna odio, eu accumsan urna consequat a. Fusce eget nisl vestibulum, sagittis nibh quis, pretium ligula. Donec ac dignissim purus. Mauris eu quam non velit condimentum porttitor id at ex.'}/> 
                    <DetailComment image="/assets/profile-2.jpg" date="12/10/2013" title={'Jessica May'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus leo magna, sit amet pretium nisi blandit ac. Suspendisse tincidunt lobortis massa in sodales. Maecenas ultricies sapien quis nunc dapibus fringilla. Integer eleifend urna odio, eu accumsan urna consequat a. Fusce eget nisl vestibulum, sagittis nibh quis, pretium ligula. Donec ac dignissim purus. Mauris eu quam non velit condimentum porttitor id at ex.'}/> 
                </div>
            </div>
                <div className="details__movies">
                <MoviesCarousel />
            </div>
                <div className="details__shortcuts"></div>
            </div>
             <Footer />
        </div>
    )
}

export default Details
