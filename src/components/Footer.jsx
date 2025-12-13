import './Footer.css'
import Minitron from './Minitron.components'
const footerLinks = [{
    section: 'DC COMICS',
    links:
        [
            { id: 1, label: 'Characters', href: '#' },
            { id: 2, label: 'Comics', href: '#' },
            { id: 3, label: 'Movies', href: '#' },
            { id: 4, label: 'TV', href: '#' },
            { id: 5, label: 'Games', href: '#' },
            { id: 6, label: 'Videos', href: '#' },
            { id: 7, label: 'News', href: '#' }
        ]

}, {
    section: 'SHOP',
    links: [
        { id: 1, label: 'Shop DC', href: '#' },
        { id: 2, label: 'Shop DC Collectibles', href: '#' }
    ]
}, {
    section: 'DC',
    links: [
        { id: 1, label: 'Terms of Use', href: '#' },
        { id: 2, label: 'Privacy policy (New)', href: '#' },
        { id: 3, label: 'Ad Choices', href: '#' },
        { id: 4, label: 'Advertising', href: '#' },
        { id: 5, label: 'Jobs', href: '#' },
        { id: 6, label: 'Subscriptions', href: '#' },
        { id: 7, label: 'Talent Workshops', href: '#' },
        { id: 8, label: 'CPSC Certificates', href: '#' },
        { id: 9, label: 'Ratings', href: '#' },
        { id: 10, label: 'Shop Help', href: '#' },
        { id: 11, label: 'Contact Us', href: '#' }
    ]
}, {
    section: 'SITES',
    links: [
        { id: 1, label: 'DC', href: '#' },
        { id: 2, label: 'MAD Magazine', href: '#' },
        { id: 3, label: 'DC Kids', href: '#' },
        { id: 4, label: 'DC Universe', href: '#' },
        { id: 5, label: 'Dc Power Visa', href: '#' }
    ]
}
];


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