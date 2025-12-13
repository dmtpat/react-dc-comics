import comics from '../data/comics.js'
import './cardContainer.css'

function CardContainer() {
    return (
        <div className="cardContainerBg">
            <div className="boxed flexContainer flexBetween fWrap">
                {comics.map((comic) => (
                    <div key={comic.id} className="card">
                        <img src={comic.thumb} alt={comic.title} />
                        <p>{comic.series}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CardContainer