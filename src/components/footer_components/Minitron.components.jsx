import style from './minitron.module.css'
function Minitron() {
    return (
        <div className={style.footerMinitron}>
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
    )
}
export default Minitron