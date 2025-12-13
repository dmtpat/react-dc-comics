import './Footer.css'
import Minitron from './footer_components/Minitron.components.jsx';
import FooterMain from './footer_components/FooterMain.components.jsx';
import FooterSocial from './footer_components/FooterSocial.components.jsx';


function Footer() {
    return (
        <footer>
            <Minitron />
            {/********************links*********>^.^<***********************/}
            <FooterMain />
            {/********************social*********>^.^<***********************/}
            <FooterSocial />
        </footer>
    )
}
export default Footer