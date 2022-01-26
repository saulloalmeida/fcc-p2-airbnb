import Star from './Star'

export default function Card({coverImg,stats,country,title,price, location, openSpots}) {
    return (
        <div className="w-44 m-3">
            <div className="w-44 h-56 rounded-xl mb-3">
                {openSpots === 0 ? <span className="bg-white rounded border m-2 absolute">Sold Out</span> 
                                : <span className="bg-white rounded border m-2 absolute">{location}</span>
                }
                <img className="rounded-xl" src={`../images/${coverImg}`} alt="" />
            </div>
            <span className="flex flex-row">
                <Star /> <span>{stats.rating} ({stats.reviewCount}) • USA</span>
            </span>
            <div className="flex flex-col">
                <span>{title}</span>
                <span> <strong>From ${price}</strong> / person</span>
            </div>
        </div>
    )
}