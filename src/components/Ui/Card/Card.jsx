import React from 'react'
import './Card.scss'

const Card = () => {
  return (
    <div className="card">
        <button>Vegetable</button>
        <div className="card-img">
            <img src="/public/assets/jsonImg/Photo.png" alt="" />
        </div>
        <div className="card-info">
            <h2>Calabrese Broccoli</h2>
        </div>
        <div className="card-price">
            <span>$13.00</span>
            <span><img src="/public/assets/Star.png" alt="" /></span>
        </div>
    </div>
  )
}

export default Card
