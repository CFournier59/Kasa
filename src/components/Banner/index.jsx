import banner1 from '../../assets/banners/banner1.png'
import banner2 from '../../assets/banners/banner2.png'
import '../../styles/Banner.scss'

/**
 * Banner component
 * @param {boolean} withTitle must be used if your banner contains a title text otherwise, leave ""
 * @returns {JSX.Element} Banner component
 */
export default function Banner({ withTitle = false }) {
   const bannerLogo = withTitle ? banner1 : banner2

   return (
      <div
         className={withTitle ? 'banner' : 'banner banner--no-shadow'}
         style={{ backgroundImage: `url(${bannerLogo})` }}
      >
         {withTitle && (
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
         )}
      </div>
   )
}
