import React,{useEffect,useState,useContext} from 'react'
import {DataContext} from '../api/context'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [searchItems,setSearchItems] = useState([])
    const {data, handleSearch } = useContext(DataContext)
    const inputControl = (e) =>{
    e.stopPropagation()
    const icon = document.querySelector('.nav__search i')
    const page = document.querySelector('html')
    icon.style.color = '#FFBB00'
    page.addEventListener('click',(e)=>{
        e.stopPropagation();
        icon.style.color = 'grey'
    })
    }
    const handleMenu = (e) =>{
    e.stopPropagation()
    const menu = document.querySelector('.nav__dropdown-menu')
    menu.classList.toggle('open')
    if(menu.classList.contains('open')){
        menu.style.opacity = '1'
        menu.style.transform = 'rotateY(0deg)'
        menu.style.boxShadow = '0px -70px 50px rgb(15, 15, 15) inset'
    }else{
        menu.style.opacity = '0'
        menu.style.transform = 'rotateY(90deg)'
        menu.style.boxShadow = '0px 50px 50px rgb(15, 15, 15) inset'
    }
    }
    const handleMenuClose = (e) =>{
    e.stopPropagation()
    const menu = document.querySelector('.nav__dropdown-menu')
    menu.classList.remove('open')
    menu.style.opacity = '0'
    menu.style.transform = 'rotateY(90deg)'
    menu.style.boxShadow = '0px 50px 50px rgb(15, 15, 15) inset'
    }

    return (
        <div className="nav">
            <img src="/assets/logo.png" alt=""/>
            <div className="nav__search" onClick={inputControl}>
                <input type="text" placeholder="Search Movies..." onInput={(e)=>{
                        let result = handleSearch(data,e.target.value)                        
                        setSearchItems(result)
                    }}/>
                <i className="fa fa-search"></i>
                <ul className="nav__search-results">
                    {searchItems.map(item=>{
                        return <li className="nav__search-results-item" key={item.id}>{item.title}</li>
                    })}
                </ul>
            </div>
            <div className="nav__menu">
                <i className="fa fa-plus"></i>
                <i className="fa fa-bell"></i>
                <div className="nav__menu-user">
                    <img src="" alt="" className="nav__profile-img" />
                    <p>Peter Jacksons</p>
                </div>
                <i className="fa fa-caret-down nav__dropdown" onClick={(e)=>handleMenu(e)}></i>
                    <ul className="nav__dropdown-menu" onMouseLeave={(e)=>handleMenuClose(e)}>
                        <li className="nav__dropdown-menu-item"><Link to="#">Profile</Link></li>
                        <li className="nav__dropdown-menu-item"><Link to="#">Settings</Link></li>
                        <li className="nav__dropdown-menu-item"><Link to="#">Account</Link></li>
                        <li className="nav__dropdown-menu-item"><Link to='#'>Log Out</Link></li>
                    </ul>
               
            </div>
        </div>
    )
}

export default Nav
