import banner1 from '../../assets/banners/banner1.png'
import banner2 from '../../assets/banners/banner2.png'
import '../../styles/Banner.scss'

export default function Banner({ whithTitle = false }) {
   const bannerLogo = whithTitle ? banner1 : banner2

   return (
      <div className="banner" style={{ backgroundImage: `url(${bannerLogo})` }}>
         {whithTitle && (
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
         )}
      </div>
   )
}
