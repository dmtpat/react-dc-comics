import './Footer.css'
import Minitron from './Minitron.components.jsx';
import footerLinks from './data/footerMainLinks.components.jsx';


function Footer() {
    return (
        <footer>
            <Minitron />
            {/********************links*********>^.^<***********************/}
            <div className="boxed footerLinks flexContainer flexBetween">
                <div className="flexContainer fRow">
                    {footerLinks.map(function (section, index) {
                        if (section.section === 'DC COMICS') {
                            return (
                                <div key='firstRow'>
                                    <ul key={section.section + 1}>
                                        <li key={section.section}><h3>{section.section}</h3></li>
                                        {section.links.map((link) => (
                                            <li key={link.id}><a href={link.href}>{link.label}</a></li>
                                        ))}
                                    </ul>
                                    <ul key={section.section + 2}>
                                        <li key='shop'><h3>SHOP</h3></li>
                                        {footerLinks[1].links.map((link) => (
                                            <li key={link.id}><a href={link.href}>{link.label}</a></li>
                                        ))}
                                    </ul>
                                </div>)
                        } else {
                            if (section.section === 'SHOP') { }
                            else {
                                return (
                                    <ul key={index}>
                                        <li key={section.section}><h3>{section.section}</h3></li>
                                        {section.links.map((link) => (
                                            <li key={link.id}><a href={link.href}>{link.label}</a></li>
                                        ))}
                                    </ul>)
                            }
                        }
                    }
                    )}
                    {/* <div>
                        <ul>
                            <li key={id}><h3>DC COMICS</h3></li>
                            <li key={id}><a href="#">Characters</a></li>
                            <li key={id}><a href="#">Comics</a></li>
                            <li key={id}><a href="#">Movies</a></li>
                            <li key={id}><a href="#">TV</a></li>
                            <li key={id}><a href="#">Games</a></li>
                            <li key={id}><a href="#">Videos</a></li>
                            <li key={id}><a href="#">News</a></li>
                        </ul>
                        <ul>
                            <li key={id}><h3>SHOP</h3></li>
                            <li key={id}><a href="#">Shop DC</a></li>
                            <li key={id}><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>
                    <ul>
                        <li key={id}><h3>DC</h3></li>
                        <li key={id}><a href="#">Terms of Use</a></li>
                        <li key={id}><a href="#">Privacy policy (New)</a></li>
                        <li key={id}><a href="#">Ad Choices</a></li>
                        <li key={id}><a href="#">Advertising</a></li>
                        <li key={id}><a href="#">Jobs</a></li>
                        <li key={id}><a href="#">Subscriptions</a></li>
                        <li key={id}><a href="#">Talent Workshops</a></li>
                        <li key={id}><a href="#">CPSC Certificates</a></li>
                        <li key={id}><a href="#">Ratings</a></li>
                        <li key={id}><a href="#">Shop Help</a></li>
                        <li key={id}><a href="#">Contact Us</a></li>

                    </ul>
                    <ul>
                        <li key={id}><h3>SITES</h3></li>
                        <li key={id}><a href="#">DC</a></li>
                        <li key={id}><a href="#">MAD Magazine</a></li>
                        <li key={id}><a href="#">DC Kids</a></li>
                        <li key={id}><a href="#">DC Universe</a></li>
                        <li key={id}><a href="#">Dc Power Visa</a></li>

                    </ul> */}
                </div>
                <img className="fLinkImage" src="./src/assets/img/dc-logo-bg.png" alt="" srcset="" />
            </div>
            {/********************social*********>^.^<***********************/}
            <div className="footerSocialBar ">
                <div className="flexContainer boxed fEnd flexCenterItems">
                    <button className="fSignUpBtn">
                        <h3>SIGN-UP NOW!</h3>
                    </button>
                    <a href="#">
                        <h3>FOLLOW US</h3>
                    </a>
                    <a href="#"><img src="./src/assets/img/footer-facebook.png" alt="" /></a>
                    <a href="#"><img src="./src/assets/img/footer-twitter.png" alt="" /></a>
                    <a href="#"><img src="./src/assets/img/footer-youtube.png" alt="" /></a>
                    <a href="#"><img src="./src/assets/img/footer-pinterest.png" alt="" /></a>
                    <a href="#"><img src="./src/assets/img/footer-periscope.png" alt="" /></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer