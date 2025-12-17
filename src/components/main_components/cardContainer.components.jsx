import comics from '../data/comics.js'
import './cardContainer.css'
import ComicCard from './ComicCard.components.jsx'

function CardContainer() {
    return (
        <div className="cardContainerBg">
            <div className="boxed">
                <div className="btn label">Current series</div>
                <div className="flexContainer flexBetween fWrap">

                    {comics.map((comic) => (
                        <ComicCard comic={comic} />
                    ))}
                </div>
                <div>
                    <button className="btn loadBtn flexSelfCenter">Load More</button>
                </div>
            </div>
        </div >
    )
}
export default CardContainer