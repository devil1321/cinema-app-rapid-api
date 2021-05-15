import React,{useEffect,useRef,useContext} from 'react'
import { DataContext } from '../api/context'
const HeroCarousel = () => {
    // const { handleCarousel } = useContext(DataContext)
    const myCarousel = useRef()
    const myCarouselItem = useRef()
    const myCarouselWrapper = useRef()
    useEffect(()=>{
        let carousel = myCarousel.current.classList.value
        let carouselItem = myCarouselItem.current.classList.value
        // handleCarousel(carousel,carouselItem,30)
    },[])
    return (
        <div className="hero__carousel-wrapper" ref={myCarouselWrapper}>
            <div className="hero__carousel" ref={myCarousel}>
                <div className="hero__carousel-item" ref={myCarouselItem}>
                    <img className="hero__carousel-overlay" src="/assets/home/overlay.png" alt="" />
                    <img className="hero__carousel-slide" src="/assets/home/slide-1.png" alt="" />
                </div>
                <div className="hero__carousel-item" ref={myCarouselItem}>
                    <img className="hero__carousel-overlay" src="/assets/home/overlay.png" alt="" />
                    <img className="hero__carousel-slide" src="/assets/home/slide-2.png" alt="" />
                </div>
                <div  className="hero__carousel-item" ref={myCarouselItem}>
                    <img className="hero__carousel-overlay" src="/assets/home/overlay.png" alt="" />
                    <img className="hero__carousel-slide" src="/assets/home/slide-3.png" alt="" />
                </div>
                <div className="hero__carousel-item" ref={myCarouselItem}>
                    <img className="hero__carousel-overlay" src="/assets/home/overlay.png" alt="" />
                    <img className="hero__carousel-slide" src="/assets/home/slide-1.png" alt="" />
                </div>
                <div className="hero__carousel-item" ref={myCarouselItem}>
                    <img className="hero__carousel-overlay" src="/assets/home/overlay.png" alt="" />
                    <img className="hero__carousel-slide" src="/assets/home/slide-2.png" alt="" />
                </div>
                <div className="hero__carousel-item" ref={myCarouselItem}>
                    <img className="hero__carousel-overlay" src="/assets/home/overlay.png" alt="" />
                    <img className="hero__carousel-slide" src="/assets/home/slide-3.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroCarousel
