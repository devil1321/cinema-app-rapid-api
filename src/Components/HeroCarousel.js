import React,{useEffect,useRef,useContext,useState} from 'react'
import { DataContext } from '../api/context'

const HeroCarousel = () => {
    const [current,setCurrent] = useState(0)
    const [move,setMove] = useState(0)
    const [movedNext,setMovedNext] = useState(false)
    const {handleControls,data} = useContext(DataContext)
    const myCarousel = useRef()
    const myCarouselItem = useRef()
    const nextRef = useRef()
    const prevRef = useRef()
    useEffect(()=>{
        let prev = prevRef.current.classList.value
        let next = nextRef.current.classList.value
        if(data.length !== 0){
            var carousel = myCarousel.current.classList.value
            var carouselItem = myCarouselItem.current.classList.value
        if(current > data.length -3){
            setMove(0)
            setCurrent(0)
        }
        if(current < -2){
            setMove(0)
            setCurrent(0)
        }
        if(movedNext){
            handleControls(next,null,current,move,carousel,carouselItem,30)
        }else{        
            handleControls(null,prev,current,move,carousel,carouselItem,30)
        }
    }
    },[move,movedNext,data])
    return (
        <div className="hero__carousel-wrapper" >
            <div className="hero__carousel" ref={myCarousel}>
            {data.map(dataItem=>{
            const { age, image, cast, countries, genres, imdbID, imdbRating, imdbVoteCount, overview, poster, streamingInfo, streamingLink, title, year } = dataItem
                return  <div className="hero__carousel-item" ref={myCarouselItem}>
                            <img className="hero__carousel-overlay" src="/assets/home/overlay.png" alt="" />
                            <img className="hero__carousel-slide" src={image} alt="" />
                            <div className="hero__carousel-item-text">
                                <h2 className="title">{title.replaceAll("#","").toUpperCase()}</h2>
                                <h3 className="country"><span>Country :</span> {countries.map(country => country + ' ')}</h3>
                                <h3 className="age"><span >Age :</span> {age}</h3>
                                <h3 className="platform"><span >Platform :</span> {Object.keys(streamingInfo)}</h3>
                            </div>
                        </div>
                })
            } 
            </div>
            <div className="prev" onClick={()=>{
                setMovedNext(false)
                setCurrent(current - 1)
                setMove(move - (myCarouselItem.current.clientWidth + 30))}}
                ref={prevRef}><i className="fa fa-chevron-left fa-2x"></i></div>
            <div className="next" onClick={()=>{
                setCurrent(current + 1)
                setMovedNext(true)
                setMove(move + (myCarouselItem.current.clientWidth + 30))}}
                ref={nextRef}><i className="fa fa-chevron-right fa-2x"></i></div>
        </div>
    )
}

export default HeroCarousel
