import footerLinks from '../data/footerMainLinks.components.jsx';
import style from './footerMain.module.css';

function footerMain() {
    return (
        <div className={`${style.footerMain} boxed flexContainer flexBetween`}>
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
            </div>
            <img className="fLinkImage" src="./src/assets/img/dc-logo-bg.png" alt="" srcset="" />
        </div>
    )
}
export default footerMain   