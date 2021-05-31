import React,{ useState,useEffect,useContext,useRef } from 'react'
import { DataContext } from '../api/context'
import { Link } from 'react-router-dom'

const MoviesCarousel = () => {

    const [count,setCount] = useState(0)
    const [move,setMove] = useState(0)
    const [fakeData,setFakeData] = useState([])
    const [isSet,setIsSet] = useState(false)

    const { handleDetailModel, data } = useContext(DataContext)

    const myCarousel = useRef()
    const myCarouselItem = useRef()
    const nextRef = useRef()
    const prevRef = useRef()

    useEffect(()=>{
        if(data.length !== 0){
        if(!isSet){
            let tempData = []
            data.map(item=>tempData.push(item))
            setFakeData(tempData)
            setIsSet(true)
            }
        }
        if(count > fakeData.length){
            var body = document.body.clientWidth
            setMove(-30)
            setCount(0)
        }
        if(count < 0){
            setMove(-145)
            setCount(fakeData.length)
        }
        console.log(count)
        console.log(move)
        let carouselWrapper = document.querySelector('.movies__carousel')
        carouselWrapper.style.transform = `translateX(${move}%)`
    },[move,count,fakeData,isSet,data])

    return (
        <div className="movies">
            <div className="movies__controls">
                <div className="prev" ref={prevRef}
                onClick={()=>{
                    var body = document.body.clientWidth
                    setMove(move + ((myCarouselItem.current.clientWidth / body) * 100))
                    setCount(count - 1)
                }}>
                <i className="fa fa-chevron-left"></i></div>
                <div className="next" ref={nextRef}
                onClick={()=>{
                    var body = document.body.clientWidth
                    setMove(move - ((myCarouselItem.current.clientWidth / body) * 100))
                    setCount(count + 1) 
                }}>
                <i className="fa fa-chevron-right"></i></div>
            </div>
            <div className="movies__carousel" ref={myCarousel}>
                {fakeData.map((dataItem,index) => {
                    const { id, poster,title } = dataItem
                    return  <div className="movies__item" key={index} ref={myCarouselItem} onClick={()=>{handleDetailModel(id)}} >
                                <Link to="/details">
                                  <img src={poster} alt="poster" />
                                </Link>
                                <h3>{title.replaceAll("#","")}</h3>
                            </div>
                })}
            </div>
        </div>
    )
}

export default MoviesCarousel
