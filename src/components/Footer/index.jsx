import logo from '../../assets/logos/logo-white-38.svg'
import '../../styles/Footer.scss'

export default function Footer() {
   return (
      <footer className="footer">
         <img className="footer__logo" src={logo} alt="Kasa Logo" />
         <p className="footer__copyright">© 2020 Kasa. All rights reserved.</p>
      </footer>
   )
}
