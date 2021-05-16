import React,{useEffect,useRef,useContext,useState} from 'react'
import { DataContext } from '../api/context'

const HeroCarousel = () => {
    const [current,setCurrent] = useState(0)
    const [move,setMove] = useState(0)
    const [movedNext,setMovedNext] = useState(false)
    const {handleCarousel,handleControls } = useContext(DataContext)
    const myCarousel = useRef()
    const myCarouselItem = useRef()
    const myCarouselWrapper = useRef()
    const nextRef = useRef()
    const prevRef = useRef()
    useEffect(()=>{
        let prev = prevRef.current.classList.value
        let next = nextRef.current.classList.value
        let carousel = myCarousel.current.classList.value
        let carouselItem = myCarouselItem.current.classList.value
        if(current > 4){
            setMove(0)
            setCurrent(0)
        }
        if(current < -1){
            setMove(0)
            setCurrent(0)
        }
        if(movedNext){
            handleControls(next,null,current,move,carousel,carouselItem,30)
        }else{
            handleControls(null,prev,current,move,carousel,carouselItem,30)
        }
        // handleCarousel(carousel,carouselItem,30)
    },[move,movedNext])
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
            <div className="prev" onClick={()=>{
              
                setMovedNext(false)
                setCurrent(current - 1)
                setMove(move - (myCarouselItem.current.clientWidth + 30))}}
                ref={prevRef}><i className="fa fa-arrow-left fa-2x"></i></div>
            <div className="next" onClick={()=>{
                setCurrent(current + 1)
                setMovedNext(true)
                setMove(move + (myCarouselItem.current.clientWidth + 30))}}
                ref={nextRef}><i className="fa fa-arrow-right fa-2x"></i></div>
        </div>
    )
}

export default HeroCarousel
