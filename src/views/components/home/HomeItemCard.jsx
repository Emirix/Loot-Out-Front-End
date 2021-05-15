import React from 'react'
import Recent1 from '../../../assets/img/recent-1.png'
function HomeItemCard({img,ItemName,ItemPrice}) {
    return (
        <div className="MostRecentItem">
            <img src={img} alt=""/>
            <p className="item-name">{ItemName}</p>
            <p className="item-price">{ItemPrice}</p>
        </div>
    )
}

export default HomeItemCard
