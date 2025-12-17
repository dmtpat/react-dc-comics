import './cardContainer.css'

function ComicCard(props) {
    const comic = props.comic;

    return (
        <div key={comic.id} className="card">
            <img src={comic.thumb} alt={comic.title} />
            <p>{comic.series}</p>
        </div>
    )
}
export default ComicCard;