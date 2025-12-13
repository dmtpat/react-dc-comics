import './Footer.css'
import Minitron from './footer_components/Minitron.components.jsx';
import FooterMain from './footer_components/FooterMain.components.jsx';


function Footer() {
    return (
        <footer>
            <Minitron />
            {/********************links*********>^.^<***********************/}
            <FooterMain />
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