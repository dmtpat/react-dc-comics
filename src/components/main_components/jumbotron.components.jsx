import jumbotronImg from '../../assets/img/jumbotron.jpg'
import './jumbotron.css'

function Jumbotron() {
    return (
        <div>
            <img class="jumbo" src={jumbotronImg} alt="jumbotron" />
        </div>
    )

}
export default Jumbotron