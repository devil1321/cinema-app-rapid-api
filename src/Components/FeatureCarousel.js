import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination,Navigation} from 'swiper/core';
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Pagination,Navigation]);

const FeatureCarousel = ({data}) => {
    const [fakeData,setFakeData] = useState([])
    const [isSet,setIsSet] = useState(false)
    useEffect(()=>{
        if(data.length !== 0){
            if(!isSet){
                let tempData = []
                data.map(item=>tempData.push(item))
                data.map(item=>tempData.push(item))
                setFakeData(tempData)
                setIsSet(true)
            }
        }
    },[fakeData,isSet,data])
    return (
        <div className="feature__carousel-wrapper">
            <div className="feature__controls">
                <div className="prev"><i className="fa fa-chevron-left"></i></div>
                <div className="next"><i className="fa fa-chevron-right"></i></div>
            </div>
            <div className="feature__carousel">
                {fakeData.map(dataItem=> {
                    const { age, image, cast, countries, genres, imdbID, imdbRating, imdbVoteCount, overview, poster, streamingInfo, streamingLink, title, year } = dataItem
                    return  <div className="feature__item">
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
