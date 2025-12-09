import './Header.css'

function Header() {
    return (
        <header className="flexContainer flexCenterItems">
        <div className="flexContainer boxed flexCenterItems flexBetween">
            <img src="./src/assets/img/dc-logo.png" className="fStart" alt="" srcset="" />
            <ul id="navMenu" >
                <div>
                    <li><a href="#">CHARACTERS</a></li>
                </div>
                <div>
                    <li><a href="#">MOVIES</a></li>
                </div>
                <div>
                    <li><a href="#">COMICS</a></li>
                </div>
                <div>
                    <li><a href="#">TV</a></li>
                </div>
                <div>
                    <li><a href="#">GAMES</a></li>
                </div>
                <div>
                    <li><a href="#">COLLECTABLES</a></li>
                </div>
                <div>
                    <li><a href="#">FANS</a></li>
                </div>
                <div>
                    <li><a href="#">NEWS</a></li>
                </div>
                <div>
                    <li><a href="#">SHOP</a></li>
                </div>
            </ul>
        </div>
    </header>
    )
}
export default Header