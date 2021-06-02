import React from 'react'

export default function KayanData({title,arrow="up",price}) {
    return (
        <div className="weekly-graph marquee-item">
            <div className="weekly-graph__title">{title}</div>
            <div className="d-flex align-items-center mt-1">
                <div className={arrow == "up" ? "arrow arrow-green" : "arrow arrow-red"}>
                    {
                        arrow == "up" ?
                        <svg  viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.52453 8.63618V1.83105" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.86572 5.23362L5.52457 1.83105L9.18342 5.23362" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 : <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.86828 1.83105V8.63618" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.52717 5.2334L4.86832 8.63596L1.20947 5.2334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    }
                </div>
                <div className="weekly-graph__price">${price}</div>
            </div>
        </div>
    )
}
