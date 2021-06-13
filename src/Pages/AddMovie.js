import React,{useEffect,useState} from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
const AddMovie = () => {
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
                <form action="">
                    <div className="add-movie__form-control">
                        <label htmlFor="">Title</label>
                        <input type="text" />
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Cast</label>
                        <div className="add-movie__multiple-value">
                            <input type="text" />
                            <button>Add Cast</button>
                        </div>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Cast</label>
                        <div className="add-movie__multiple-value">
                            <input type="text" />
                            <button>Add Genre</button>
                        </div>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">ImdbID</label>
                        <input type="text" />
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">ImdbRating</label>
                        <input type="text" />
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">imdbVoteCount</label>
                        <input type="text" />
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Overview</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">PosterURLs</label>
                        <input type="text" />
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Significants</label>
                        <div className="add-movie__multiple-value">
                            <input type="text" />
                            <button>Add Significant</button>
                        </div>
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Streaming Info</label>
                        <label htmlFor="">Streaming Platform</label>
                        <input type="text" />
                        <label htmlFor="">Streaming Link</label>
                        <input type="text" />
                    </div>
                    <div className="add-movie__form-control">
                        <label htmlFor="">Year</label>
                        <input type="text" />
                    </div>
                    <button type="submit">Add Your Favoruite Movie</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default AddMovie
