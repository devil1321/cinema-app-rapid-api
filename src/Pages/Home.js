import React,{useContext} from 'react'
import Nav from '../Components/Nav'
import HeroCarousel from '../Components/HeroCarousel'
import FeatureCarousel from '../Components/FeatureCarousel'
import Footer from '../Components/Footer'
import {DataContext} from '../api/context'
const Home = () => {
    const {data} = useContext(DataContext)
    return (
        <div className="home">
            <Nav />
            <HeroCarousel />
            <FeatureCarousel />
            <Footer/>
        </div>
    )
}

export default Home
