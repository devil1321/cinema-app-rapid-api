import React,{useState,useEffect,useContext,useRef} from 'react'
import { DataContext } from '../api/context'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination,Navigation} from 'swiper/core';
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Pagination,Navigation]);

const FeatureCarousel = () => {
    const [current,setCurrent] = useState(0)
    const [move,setMove] = useState(0)
    const [moveBy,setMoveBy]= useState(0)
    const [movedNext,setMovedNext] = useState(null)
    const [isMove,setIsMove] = useState(true)
    const [fakeData,setFakeData] = useState([])
    const [isSet,setIsSet] = useState(false)
    const [way,setWay] = useState(false)
    const { handleControls, data } = useContext(DataContext)

    const myCarousel = useRef()
    const myCarouselItem = useRef()
    const nextRef = useRef()
    const prevRef = useRef()


    const handlePlay = (newMove,isMove) =>{
        let carouselWrapper = document.querySelector('.feature__carousel')
        if(isMove){
        carouselWrapper.style.transition = "all 100ms linear"
        var play = setInterval(()=>{
            carouselWrapper.style.transform = `translateX(${newMove}%)`
                if(newMove > 4){
                    setWay(false)
                } else if(newMove < -155){
                    setWay(true)
                }
                if(way){
                    newMove += (1/40)
                    setMove(newMove)

                }else{
                    newMove = newMove -= (1/40)
                    setMove(newMove)

                }
            })    
        }else{
            for (var i = 1; i < 999999; i++){ window.clearInterval(i)}
        }
    }
    useEffect(()=>{
        let prev = prevRef.current.classList.value
        let next = nextRef.current.classList.value
        if(data.length !== 0){
            if(!isSet){
                let tempData = []
                data.map(item=>tempData.push(item))
                data.map(item=>tempData.push(item))
                setFakeData(tempData)
                setIsSet(true)
            }
        }      
        if(isSet){    
            let carousel = document.querySelector('.feature__carousel')
            carousel.style.transition = "all 1s linear"
            if(movedNext == true && !isMove){
                if(moveBy < -155){
                    setMoveBy(4)
                    setWay(false)
                }

                carousel.style.transform = `translateX(${moveBy}%)`
                setMove(moveBy)

            }else if(movedNext == false & !isMove){        
                if(moveBy > 4){
                    setMoveBy(-155)
                    setWay(true)
                }
                carousel.style.transform = `translateX(${moveBy}%)`
                setMove(moveBy)
        
            }
        }
        handlePlay(move,isMove)

    },[fakeData,isSet,data,isMove,way,movedNext,moveBy])

    return (
        <div className="feature__carousel-wrapper">
            <div className="feature__controls">
                <div className="prev" ref={prevRef}
                onClick={()=>{
                    var body = document.body.clientWidth
                    setMoveBy(move + ((myCarouselItem.current.clientWidth/body) * 100))
                    setMovedNext(false)
                    setIsMove(false)
           
                }}>
                <i className="fa fa-chevron-left"></i></div>
                <div className="next" ref={nextRef}
                onClick={()=>{
                    var body = document.body.clientWidth
                    setMoveBy(move - ((myCarouselItem.current.clientWidth/body) * 100))
                    setMovedNext(true)
                    setIsMove(false)
        
                }}>
                <i className="fa fa-chevron-right"></i></div>
            </div>
            <div className="feature__carousel" ref={myCarousel}>
                {fakeData.map(dataItem=> {
                    const { age, image, cast, countries, genres, imdbID, imdbRating, imdbVoteCount, overview, poster, streamingInfo, streamingLink, title, year } = dataItem
                    return  <div className="feature__item" ref={myCarouselItem} onMouseEnter={()=>{setIsMove(false)}} onMouseLeave={()=>{setIsMove(true)}}>
                              <img src={poster} alt="poster" />
                            </div>

            })}
            </div>
            <div className="feature__carousel-swiper">
            <Swiper
              spaceBetween={10}
              slidesPerView={6}
              loop={true} 
              pagination={{ "clickable": true }} 
              navigation={true}
            >
            {fakeData.map(dataItem=> {
                const { age, image, cast, countries, generes, imdbID, imdbRating, imdbVoteCount, overview, poster, streamingInfo, streamingLink, title, year } = dataItem
                return  <SwiperSlide>
                            <div className="feature__item">
                                <img src={poster} alt="poster" />
                            </div>
                        </SwiperSlide>
            })}
            </Swiper>
            </div>
            
        </div>
    )
}

export default FeatureCarousel
