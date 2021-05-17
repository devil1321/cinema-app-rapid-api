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
    const [moveBy,setMoveBy] = useState(0)
    const [movedNext,setMovedNext] = useState(false)
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
        var play = setInterval(()=>{
            if(newMove > 4 * 50){
                setWay(false)
            }else if(newMove < -155 * 50){
                setWay(true)
            }
            if(way){
                newMove += (1/40)
                setMove(newMove)
            }else{
                newMove -= (1/40)
                setMove(newMove)
            }
            carouselWrapper.style.transform = `translateX(${newMove}%)`
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
        handlePlay(move,isMove)
      

        // if(isSet){    
        //     var carousel = myCarousel.current.classList.value
        //     var carouselItem = myCarouselItem.current.classList.value
        //     if(movedNext && !isMove){
        //         handleControls(next,null,current,moveBy,carousel,carouselItem,12)
        //     }else if(!movedNext & !isMove){        
        //         handleControls(null,prev,current,moveBy,carousel,carouselItem,12)
        //     }
        // }
    },[fakeData,isSet,data,isMove])

    return (
        <div className="feature__carousel-wrapper">
            <div className="feature__controls">
                <div className="prev" ref={prevRef}
                onClick={()=>{
                    setMoveBy(moveBy + myCarouselItem.current.clientWidth)
                    setMovedNext(false)
                    setIsMove(false)
                }}>
                <i className="fa fa-chevron-left"></i></div>
                <div className="next" ref={nextRef}
                onClick={()=>{
                    setMoveBy(moveBy - myCarouselItem.current.clientWidth)
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
