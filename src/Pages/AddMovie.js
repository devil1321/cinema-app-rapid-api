import React,{useEffect,useState} from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
const AddMovie = () => {
    const [formData,setFormData] = useState({
        id:null,
        title:null,
        age:null,
        cast:null,
        genre:null,
        imdbID:null,
        imdbRating:null,
        imdbVoteCount:null,
        overview:null,
        posterURLs:{
            orginal:null
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

    const handleGenre = () => {
        const form = document.querySelector('form')
        if(form.genre.value !== ""){
            const tempGenre = form.genre.value.split(',')
            setFormData(prevState =>({
                ...prevState,
                genre:tempGenre
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
            orginal:null
        }
        if(form.posterURLs.value !== ""){
            tempPosterURLs.orginal = form.posterURLs.value
            setFormData(prevState =>({
                ...prevState,
                posterURLs:tempPosterURLs
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
        console.log('data',formData)
    }

   

    useEffect(()=>{
        console.log(formData)
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
                <form action="" onClick={(e)=>{handleSubmit(e)}}>
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
                            <button onClick={()=>{handleCast()}}>Add Cast</button>
                        </div>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Genre</label>
                        <div className="add-movie__multiple-value">
                            <input type="text" name="genre" placeholder="Add Genre example: 'Action','Drama'"/>
                            <button onClick={()=>{handleGenre()}}>Add Genre</button>
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
                        <label htmlFor="">Significants</label>
                        <div className="add-movie__multiple-value">
                            <input type="text" name="significants" placeholder="Add significants example: John McGreedy, Joanna Poniewoźnik" />
                            <button onClick={()=>{handleSignificants()}}>Add Significant</button>
                        </div>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Streaming Info</label>
                        <label htmlFor="">Streaming Platform</label>
                        <input type="text" name="streamingPlatform" placeholder="Add platform example: netflix"/>
                        <label htmlFor="">Streaming Link</label>
                        <input type="text" name="streamingLink" placeholder="Add Streaming Link example: https://netflix.com/john-wick-4" />
                        <button onClick={(e)=>{handleStreamingInfo(e)}}>Add Streaming</button>
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
