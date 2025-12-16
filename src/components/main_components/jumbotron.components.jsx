import jumbotronImg from '../../assets/img/jumbotron.jpg'
import './jumbotron.css'

function Jumbotron() {
    return (
        <div className="jumbo">
            <img src={jumbotronImg} alt="jumbotron" />
        </div>
    )

}
export default Jumbotron