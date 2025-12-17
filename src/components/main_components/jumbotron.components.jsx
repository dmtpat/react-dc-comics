import jumbotronImg from '../../assets/img/jumbotron.jpg'
import style from './jumbotron.module.css'

function Jumbotron() {
    return (
        <div className={style.jumbo}>
            <img src={jumbotronImg} alt="jumbotron" />
        </div>
    )

}
export default Jumbotron