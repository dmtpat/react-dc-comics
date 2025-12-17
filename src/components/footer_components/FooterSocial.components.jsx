import style from './footerSocial.module.css';
function FooterSocial() {
    return (
        <div className={style.footerSocialBar}>
            <div className="flexContainer boxed fEnd flexCenterItems">
                <button className={style.fSignUpBtn}>
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
    )
}
export default FooterSocial;