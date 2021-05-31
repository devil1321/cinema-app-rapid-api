import React from 'react'

const DetailComment = ({image,title,date,text}) => {
    return (
        <div className="detail__comment">
            <div className="detail__comment-image">
                <img src={image} alt="profile-comment-image" />
            </div>
            <div className="detail__comment-text">
                <div className="detail__comment-header">
                    <h3>{title}</h3>
                    <div className="detail__comment-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <div className="detail__comment-date">{date}</div>
                </div>
                {text}
            </div>
        </div>
    )
}

export default DetailComment
