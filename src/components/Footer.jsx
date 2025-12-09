
function Footer() {
    return (
        <footer>
        <div className="footerMainLinks">
            <div className="flexContainer boxed flexBetween flexCenterItems">
                
                    <img src="./src/assets/img/buy-comics-digital-comics.png" alt="" />
                    <p>DIGITAL COMICS</p>
               
                    <img src="./src/assets/img/buy-comics-merchandise.png" alt="" />
                    <p>DC MERCHANDISE</p>
               
                    <img src="./src/assets/img/buy-comics-subscriptions.png" alt="" />
                    <p>SUBSCRIPTION</p>
                
                    <img src="./src/assets/img/buy-comics-shop-locator.png" alt="" />
                    <p>COMIC SHOP LOCATOR</p>
                
                    <img src="./src/assets/img/buy-dc-power-visa.svg" alt="" />
                    <p>DC POWER VISA</p>
                
            </div>
        </div>
        <div className="boxed footerLinks flexContainer flexBetween">
            <div className="flexContainer fRow">
                <ul>
                    <h3>DC COMICS</h3>
                    <li><a href="#">Characters</a></li>
                    <li><a href="#">Comics</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">News</a></li>

                    <h3>SHOP</h3>
                    <li><a href="#">Shop DC</a></li>
                    <li><a href="#">Shop DC Collectibles</a></li>
                </ul>
                <ul>
                    <h3>DC</h3>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy policy (New)</a></li>
                    <li><a href="#">Ad Choices</a></li>
                    <li><a href="#">Advertising</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Subscriptions</a></li>
                    <li><a href="#">Talent Workshops</a></li>
                    <li><a href="#">CPSC Certificates</a></li>
                    <li><a href="#">Ratings</a></li>
                    <li><a href="#">Shop Help</a></li>
                    <li><a href="#">Contact Us</a></li>

                </ul>
                <ul>
                    <h3>SITES</h3>
                    <li><a href="#">DC</a></li>
                    <li><a href="#">MAD Magazine</a></li>
                    <li><a href="#">DC Kids</a></li>
                    <li><a href="#">DC Universe</a></li>
                    <li><a href="#">Dc Power Visa</a></li>

                </ul>
            </div>
            <img className="fLinkImage" src="./src/assets/img/dc-logo-bg.png" alt="" srcset="" />
        </div>
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