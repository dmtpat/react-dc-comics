import comics from '../data/comics.js'
import style from './cardContainer.module.css'
import ComicCard from './ComicCard.components.jsx'

function CardContainer() {
    return (
        <div className={style.cardContainerBg}>
            <div className="boxed">
                <div className={`${style.btn} ${style.label}`}>Current series</div>
                <div className="flexContainer flexBetween fWrap">

                    {comics.map((comic) => (
                        <ComicCard comic={comic} />
                    ))}
                </div>
                <div>
                    <button className={`${style.btn} ${style.loadBtn} flexSelfCenter`}>Load More</button>
                </div>
            </div>
        </div >
    )
}
export default CardContainer