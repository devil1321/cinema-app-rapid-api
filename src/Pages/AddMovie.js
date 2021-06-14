import React,{useEffect,useState,useContext} from 'react'
import { DataContext } from '../api/context' 
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
const AddMovie = () => {
    const {setIsSet} = useContext(DataContext)
    const [formData,setFormData] = useState({
        id:uuidv4(),
        title:null,
        age:null,
        cast:null,
        genres:null,
        countries:null,
        imdbID:null,
        imdbRating:null,
        imdbVoteCount:null,
        overview:null,
        posterURLs:{
            original:null
        },
        backdropURLs:{
            original:null
        },
        significants:null,
        streamingInfo:null,
        year:null
    })

    const handleCast = () => {
        const form = document.querySelector('form')
        if(form.cast.value !== ""){
            const tempCast = form.cast.value.split(',')
            setFormData(prevState =>({
                ...prevState,
                cast:tempCast
            }))
        }
    }

    const handleGenres = () => {
        const form = document.querySelector('form')
        if(form.genres.value !== ""){
            const tempGenre = form.genres.value.split(',')
            setFormData(prevState =>({
                ...prevState,
                genres:tempGenre
            }))
        }
    }
    const handleCountries = () => {
        const form = document.querySelector('form')
        if(form.countries.value !== ""){
            const tempCountries = form.countries.value.split(',')
            setFormData(prevState =>({
                ...prevState,
                countries:tempCountries
            }))
        }
    }

    const handleSignificants = () => {
        const form = document.querySelector('form')
        if(form.significants.value !== ""){
            const tempSignificants = form.significants.value.split(",")
            console.log(tempSignificants)
            setFormData(prevState =>({
                ...prevState,
                significants:tempSignificants
            }))
        }
    }
    
    const handlePosterURLs = () =>{
        const form = document.querySelector('form')
        const tempPosterURLs = {
            original:null
        }
        if(form.posterURLs.value !== ""){
            tempPosterURLs.original = form.posterURLs.value
            setFormData(prevState =>({
                ...prevState,
                posterURLs:tempPosterURLs
            }))
        }
    }
    const handleBackdropURLs = () =>{
        const form = document.querySelector('form')
        const tempBackdropURLs = {
            original:null
        }
        if(form.backdropURLs.value !== ""){
            tempBackdropURLs.original = form.backdropURLs.value
            setFormData(prevState =>({
                ...prevState,
                backdropURLs:tempBackdropURLs
            }))
        }
    }

    const handleStreamingInfo = (e) => {
        e.preventDefault()
        const form = document.querySelector('form')
        if(form.streamingPlatform.value !== "" && form.streamingLink.value !== "" ){
            const tempStreamingInfo  = {
                [`${form.streamingPlatform.value}`]:{
                    us:{
                        link:form.streamingLink.value
                    }
                }
            }
            setFormData(prevState =>({
                ...prevState,
                streamingInfo:tempStreamingInfo
     
            }))
        }
    }

    const handleChange = (e) =>{
        setFormData(prevState =>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('https://cinema-app-json-server.herokuapp.com/results',formData)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        const resetForm = {
            id:uuidv4(),
            title:null,
            age:null,
            cast:null,
            genres:null,
            countries:null,
            imdbID:null,
            imdbRating:null,
            imdbVoteCount:null,
            overview:null,
            posterURLs:{
                original:null
            },
            backdropURLs:{
                original:null
            },
            significants:null,
            streamingInfo:null,
            year:null
        }
        let inputs = document.querySelectorAll('input')
        let textArea = document.querySelector('textarea')
        inputs.forEach(input =>{
            input.value = ''
        })
        textArea.value = ''
        setFormData(resetForm)
        setIsSet(false)
        window.location.href = '/'
    }

   

    useEffect(()=>{
       
        
    },[formData])

    return (
        <div className="add-movie">
            <Nav />
            <div className="add-movie__hero">
                <div className="add-movie__hero-image">
                    <img src="/assets/hero_form.jpg" alt="hero" />
                    <div className="add-movie__hero-text">
                        <h1>Add Favoruite Movie</h1>
                        <p>Enjoy Watching Everywhere</p>
                    </div>
                </div>
            </div>
            <div className="add-movie__form">
                <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Title</label>
                        <input type="text" name="title" onChange={(e)=>{handleChange(e)}} placeholder = "Write Title" />
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Age</label>
                        <input type="text" name="age" onChange={(e)=>{handleChange(e)}} placeholder="Write Age" />
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Cast</label>
                        <div className="add-movie__multiple-value">
                            <input type="text" name="cast" placeholder="Write Cast example : 'Kia','Vin Diesel'"/>
                            <div className="btn" onClick={()=>{handleCast()}}>Add Cast</div>
                        </div>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Genres</label>
                        <div className="add-movie__multiple-value">
                            <input type="text" name="genres" placeholder="Add Genre example: 'Drama ,History, Thriller ,Comedy ,Fantasy ,Sport, Crime ,Horror ,Mystery '"/>
                            <div className="btn" onClick={()=>{handleGenres()}}>Add Genre</div>
                        </div>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Countries</label>
                        <div className="add-movie__multiple-value">
                            <input type="text" name="countries" placeholder="Add Genre example: 'US','EN'"/>
                            <div className="btn" onClick={()=>{handleCountries()}}>Add Countries</div>
                        </div>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">ImdbID</label>
                        <input type="text" name="imdbID" placeholder="Add ImdbID" onChange={(e)=>{handleChange(e)}}/>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">ImdbRating</label>
                        <input type="text" name="imdbRating" placehoder="Add Imdb Rating" onChange={(e)=>{handleChange(e)}}/>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">imdbVoteCount</label>
                        <input type="text" name="imdbVoteCount" placeholder="Add ImdbVoteCount" onChange={(e)=>{handleChange(e)}}/>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Overview</label>
                        <textarea name="" id="" cols="30" rows="10" name="overview" placeholder="Add Overview" onChange={(e)=>{handleChange(e)}}></textarea>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">PosterURLs</label>
                        <input type="text" name="posterURLs" placeholder="Add Url example: https://url.com/poster" onChange={()=>handlePosterURLs()}/>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">BackdropURLs</label>
                        <input type="text" name="backdropURLs" placeholder="Add Url example: https://url.com/backdrop" onChange={()=>handleBackdropURLs()}/>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Significants</label>
                        <div className="add-movie__multiple-value">
                            <input type="text" name="significants" placeholder="Add significants example: John McGreedy, Joanna Poniewoźnik" />
                            <div className="btn" onClick={()=>{handleSignificants()}}>Add Significant</div>
                        </div>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Streaming Info</label>
                        <label htmlFor="">Streaming Platform</label>
                        <input type="text" name="streamingPlatform" placeholder="Add platform example: netflix"/>
                        <label htmlFor="">Streaming Link</label>
                        <input type="text" name="streamingLink" placeholder="Add Streaming Link example: https://netflix.com/john-wick-4" />
                        <div className="btn" onClick={(e)=>{handleStreamingInfo(e)}}>Add Streaming</div>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Year</label>
                        <input type="text" name="year" placeholder="Add year" onChange={(e)=>{handleChange(e)}}/>
                    </div>
                    <button type="submit">Add Your Favoruite Movie</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default AddMovie
