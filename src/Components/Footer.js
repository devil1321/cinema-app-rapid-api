import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="footer">
            <div className="col-1">
                <Link to="/">
                    <img src="/assets/logo.png" alt="" />
                </Link>
            </div>
            <div className="col-2">
                <p>Copyright &copy; 2021</p>
            </div>
            <div className="col-3">
                <ul>
                    <li> <i className="fa fa-chevron-right"></i> <Link to="/home">Home</Link></li>
                    <li> <i className="fa fa-chevron-right"></i> <Link to="https://www.netflix.com">Netflix</Link></li>
                    <li> <i className="fa fa-chevron-right"></i> <Link to="https://www.imdb.com/">IMDb</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
