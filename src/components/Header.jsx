import './Header.css'
import  navMenuLinks  from './data/navMenuLinks.components.jsx';
// const navMenuLinks = [
//     { id: 1, label: 'CHARACTERS', href: '#' },
//     { id: 2, label: 'MOVIES', href: '#' }, 
//     { id: 3, label: 'COMICS', href: '#' },
//     { id: 4, label: 'TV', href: '#' },
//     { id: 5, label: 'GAMES', href: '#' },
//     { id: 6, label: 'COLLECTABLES', href: '#' },
//     { id: 7, label: 'FANS', href: '#' },
//     { id: 8, label: 'NEWS', href: '#' },
//     { id: 9, label: 'SHOP', href: '#' }
// ];

function Header() {
    return (
        <header className="flexContainer flexCenterItems">
        <div className="flexContainer boxed flexCenterItems flexBetween">
            <img src="./src/assets/img/dc-logo.png" className="fStart" alt="" srcset="" />
                <ul id="navMenu" >
                    {navMenuLinks.map((link) => (
                        <div key={link.id}>
                            <li><a href={link.href}>{link.label}</a></li>
                        </div>
                    ))} 
                {/* <div>
                    <li key={id}><a href="#">CHARACTERS</a></li>
                </div>
                <div>
                    <li key={id}><a href="#">MOVIES</a></li>
                </div>
                <div>
                    <li key={id}><a href="#">COMICS</a></li>
                </div>
                <div>
                    <li key={id}><a href="#">TV</a></li>
                </div>
                <div>
                    <li key={id}><a href="#">GAMES</a></li>
                </div>
                <div>
                    <li key={id}><a href="#">COLLECTABLES</a></li>
                </div>
                <div>
                    <li key={id}><a href="#">FANS</a></li>
                </div>
                <div>
                    <li key={id}><a href="#">NEWS</a></li>
                </div>
                <div>
                    <li key={id}><a href="#">SHOP</a></li>
                </div> */}
            </ul>
        </div>
    </header>
    )
}
export default Header