import React from 'react'
import { Link } from 'react-router-dom'
const inputControl = (e) =>{
    e.stopPropagation()
    const input = document.querySelector('.nav__search')
    const icon = document.querySelector('.nav__search i')
    const page = document.querySelector('html')
    input.style.border = '1px solid gray'
    icon.style.color = '#FFBB00'
    page.addEventListener('click',(e)=>{
        e.stopPropagation();
        input.style.border = '1px solid #151F2E'
        icon.style.color = 'grey'
    })
}
const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__search" onClick={inputControl}>
                <input type="text" placeholder="Search Movies..."/>
                <i className="fa fa-search"></i>
                <ul className="nav__search-results">
                    
                </ul>
            </div>
            <div className="nav__menu">
                <i className="fa fa-plus"></i>
                <i className="fa fa-bell"></i>
                <div className="nav__menu-user">
                    <img src="" alt="" className="nav__profile-img" />
                    <p>Peter Jacksons</p>
                </div>
                <i className="fa fa-caret-down nav__dropdown">
                    <ul className="nav__dropdown-menu">
                        <li className="nav__dropdown-menu-item">Profile</li>
                        <li className="nav__dropdown-menu-item">Settings</li>
                        <li className="nav__dropdown-menu-item">Account</li>
                        <li className="nav__dropdown-menu-item">Log Out</li>
                    </ul>
                </i>
            </div>
        </div>
    )
}

export default Nav
