import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import data from '../data'
export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="flex justify-center">
                {data.map(item => {
                    return (
                        <Card
                        image={`../images/${item.coverImg}`}
                        rating={item.stats.rating}
                        reviewCount={item.stats.reviewCount}
                        country={"USA"}
                        title={item.title}
                        price={item.price}
                        location={item.location}
                        key={item.id}
                        openSpots={item.openSpots}
                    />
                    )
                })}
                {/* <Card
                    image={img1}
                    rating="5.0"
                    reviewCount={6}
                    country="USA"
                    title="Life lessons with Katie Zaferes"
                    price={136}
                /> */}
            </div>
        </>
    )
}